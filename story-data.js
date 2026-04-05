(function () {
  const chapterFiles = Array.isArray(window.AliceCourtyardChapterFiles)
    ? window.AliceCourtyardChapterFiles.slice()
    : [];
  const voiceManifest =
    window.AliceCourtyardVoiceManifest &&
    typeof window.AliceCourtyardVoiceManifest === "object"
      ? window.AliceCourtyardVoiceManifest
      : {};

  const speakerSlugMap = {
    "旁白": "narration",
    "Noa": "noa",
    "Moel": "moel",
    "Hana": "hana",
    "Yume": "yume",
    "Alice": "alice",
    "Mizuki": "mizuki",
    "Visitor": "visitor",
    "blank girl": "blank_girl",
    "Blank Girl": "blank_girl",
    "blank_girl": "blank_girl",
    "暗.Yume": "dark_yume",
    "暗.Hana": "dark_hana",
    "暗.Alice": "dark_alice",
    "dark Yume": "dark_yume",
    "dark Hana": "dark_hana",
    "dark Alice": "dark_alice"
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

  const chapters = chapterFiles.map((chapter) => ({
    id: chapter.id,
    title: chapter.title,
    subtitle: chapter.subtitle,
    location: chapter.location
  }));

  const lines = chapterFiles.flatMap((chapter) => {
    let voiceCounter = 0;

    return (chapter.lines || []).map((line) => {
      const hasText = typeof line.text === "string" && line.text.trim().length > 0;
      const speakerSlug = hasText ? detectSpeakerSlug(line) : "";
      const isVoiceEligible = hasText && line.type !== "card" && speakerSlug;

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
        typeof line.voice === "string" && line.voice.trim()
          ? line.voice
          : manifestValue === true
            ? voiceSuggestedPath
            : typeof manifestValue === "string" && manifestValue.trim()
              ? manifestValue
              : null;

      return {
        chapterId: line.chapterId || chapter.id,
        ...line,
        ...(voiceKey ? { voiceKey, voiceSuggestedPath } : {}),
        ...(resolvedVoice ? { voice: resolvedVoice, voiceAuto: !line.voice } : {})
      };
    });
  });

  window.AliceCourtyardStory = {
    title: "After Alice | Part I",
    chapters,
    lines
  };
})();
