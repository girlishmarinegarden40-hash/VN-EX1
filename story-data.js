(function () {
  const chapterFiles = Array.isArray(window.AliceCourtyardChapterFiles)
    ? window.AliceCourtyardChapterFiles.slice()
    : [];
  const voiceManifest =
    window.AliceCourtyardVoiceManifest &&
    typeof window.AliceCourtyardVoiceManifest === "object"
      ? window.AliceCourtyardVoiceManifest
      : {};

  const localization = window.AliceCourtyardLocalization || null;
  const storyLocalization = localization?.story || {};
  const chapterLocalization = localization?.chapters || {};
  const lineLocalization = localization?.lines || {};
  const locationMap = (localization && typeof localization.locationMap === "object")
    ? localization.locationMap : null;

  function translateLocation(loc) {
    if (!locationMap || !loc) return loc;
    return locationMap[loc] || loc;
  }

  function mergeLocalizedRecord(base, override) {
    if (!override || typeof override !== "object") return base;
    return Object.assign({}, base, override);
  }

  const speakerSlugMap = {
    "旁白": "narration",
    "Narration": "narration",
    "Noa": "noa",
    "Moel": "moel",
    "Hana": "hana",
    "Yume": "yume",
    "Alice": "alice",
    "Mizuki": "mizuki",
    "Visitor": "visitor",
    "blank girl": "blank_girl",
    "Blank Girl": "blank_girl",
    "Unnamed Girl": "blank_girl",
    "blank_girl": "blank_girl",
    "未命名少女": "blank_girl",
    "未命名女孩": "blank_girl",
    "World Echo": "world_echo",
    "世界残响": "world_echo",
    "World": "world",
    "世界": "world",
    "暗.Yume": "dark_yume",
    "暗.Hana": "dark_hana",
    "暗.Alice": "dark_alice",
    "dark Yume": "dark_yume",
    "dark Hana": "dark_hana",
    "dark Alice": "dark_alice",
    "Dark Yume": "dark_yume",
    "Dark Hana": "dark_hana",
    "Dark Alice": "dark_alice"
  };

  function slugifySpeaker(speaker) {
    if (!speaker) {
      return "";
    }

    const directHit = speakerSlugMap[speaker];
    if (directHit) {
      return directHit;
    }

    const normalized = String(speaker)
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "");

    return normalized || "voice";
  }

  function detectSpeakerSlug(line) {
    const spriteSources = Array.isArray(line.sprites)
      ? line.sprites
          .map((sprite) => (sprite && typeof sprite.src === "string" ? sprite.src : ""))
          .filter(Boolean)
      : [];

    if (spriteSources.some((src) => src.includes("/dark_alice/"))) {
      return "dark_alice";
    }
    if (spriteSources.some((src) => src.includes("/dark_hana/"))) {
      return "dark_hana";
    }
    if (spriteSources.some((src) => src.includes("/dark_yume/"))) {
      return "dark_yume";
    }
    if (spriteSources.some((src) => src.includes("/blank_girl/"))) {
      return "blank_girl";
    }

    return slugifySpeaker(line.speaker);
  }

  function buildSuggestedVoicePath(chapterId, voiceKey) {
    return `./assets/voice/${chapterId}/${voiceKey}.wav`;
  }

  const chapters = chapterFiles.map((chapter) => {
    const locChapter = chapterLocalization[chapter.id];
    const merged = mergeLocalizedRecord(
      { id: chapter.id, title: chapter.title, subtitle: chapter.subtitle, location: chapter.location },
      locChapter
    );
    if (!locChapter?.location && merged.location) {
      merged.location = translateLocation(merged.location);
    }
    return merged;
  });

  const lines = chapterFiles.flatMap((chapter) => {
    let voiceCounter = 0;
    let lineCounter = 0;

    return (chapter.lines || []).map((line) => {
      lineCounter += 1;
      const lineId = `${chapter.id}::${lineCounter}`;
      const locLine = lineLocalization[lineId] || null;
      const mergedLine = mergeLocalizedRecord(line, locLine);
      if (!locLine?.location && mergedLine.location) {
        mergedLine.location = translateLocation(mergedLine.location);
      }

      const hasText = typeof mergedLine.text === "string" && mergedLine.text.trim().length > 0;
      const speakerSlug = hasText ? detectSpeakerSlug(mergedLine) : "";
      const isVoiceEligible = hasText && mergedLine.type !== "card" && speakerSlug;

      let voiceKey = null;
      let voiceSuggestedPath = null;
      let manifestValue = null;

      if (isVoiceEligible) {
        voiceCounter += 1;
        voiceKey = `${chapter.id}_${String(voiceCounter).padStart(3, "0")}_${speakerSlug}`;
        voiceSuggestedPath = buildSuggestedVoicePath(chapter.id, voiceKey);
        manifestValue = voiceManifest[voiceKey];
      }

      const resolvedVoice =
        typeof mergedLine.voice === "string" && mergedLine.voice.trim()
          ? mergedLine.voice
          : manifestValue === true
            ? voiceSuggestedPath
            : typeof manifestValue === "string" && manifestValue.trim()
              ? manifestValue
              : null;

      return {
        chapterId: mergedLine.chapterId || chapter.id,
        ...mergedLine,
        ...(voiceKey ? { voiceKey, voiceSuggestedPath } : {}),
        ...(resolvedVoice ? { voice: resolvedVoice, voiceAuto: !mergedLine.voice } : {})
      };
    });
  });

  window.AliceCourtyardStory = {
    title: storyLocalization.title || "After Alice | Part I",
    locale: localization?.locale || "zh-CN",
    chapters,
    lines
  };
})();
