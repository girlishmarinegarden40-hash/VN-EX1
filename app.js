(function () {
  const story = window.AliceCourtyardStory;
  if (!story || !Array.isArray(story.lines) || !story.lines.length) {
    return;
  }

  const currentLanguage = String(story.locale || "").toLowerCase().startsWith("en") ? "en" : "zh";
  const initialUrl = new URL(window.location.href);
  const shouldResumeAfterLanguageSwitch = initialUrl.searchParams.get("resume") === "1";
  const shouldAutoStartEntry = initialUrl.searchParams.get("autostart") === "1";
  const isEn = currentLanguage === "en";

  document.documentElement.lang = currentLanguage === "en" ? "en" : "zh-CN";

  const ui_strings = isEn ? {
    unknownLocation: "Unknown Location",
    routeMemory: "Route Memory",
    notRecorded: "Not recorded",
    tripleSphere: "Three Spaces",
    tripleSphereLabel: "Three Spaces · Concurrent",
    narration: "Narration",
    defaultTrap: "This is your choice. Not theirs.",
    defaultTrapTrace: "Convergence complete",
    alreadyTried: "Already tried",
    letThemChoose: "Let them decide",
    speakForThem: "Speak for them",
    routeNote: "Not a map. Just a record of where we have already been.",
    routeMemoryLabel: "Route Memory"
  } : {
    unknownLocation: "未知地点",
    routeMemory: "路线记忆",
    notRecorded: "未记录",
    tripleSphere: "三空间",
    tripleSphereLabel: "三空间 · 同时发生",
    narration: "旁白",
    defaultTrap: "这只是你的选择，不是她们的。",
    defaultTrapTrace: "收束完成",
    alreadyTried: "已经试过",
    letThemChoose: "让她们自己选",
    speakForThem: "替她们说完",
    routeNote: "不是地图。只是把我们已经走过的地方，暂时记下来。",
    routeMemoryLabel: "路线记忆"
  };

  const storageKey = "after-alice-part1-progress";
  const defaultTypingSpeed = 18;
  const defaultAutoDelay = 1800;
  const defaultCardDuration = 2150;

  const ui = {
    coverOverlay: document.getElementById("coverOverlay"),
    coverStartButton: document.getElementById("coverStartButton"),
    coverContinueButton: document.getElementById("coverContinueButton"),
    coverGalleryButton: document.getElementById("coverGalleryButton"),
    coverCreditsButton: document.getElementById("coverCreditsButton"),
    coverLanguageZhButton: document.getElementById("coverLanguageZhButton"),
    coverLanguageEnButton: document.getElementById("coverLanguageEnButton"),
    coverResidualMark: document.getElementById("coverResidualMark"),
    chapterName: document.getElementById("chapterName"),
    locationName: document.getElementById("locationName"),
    bgmName: document.getElementById("bgmName"),
    voiceName: document.getElementById("voiceName"),
    bgmVolumeRange: document.getElementById("bgmVolumeRange"),
    bgmVolumeValue: document.getElementById("bgmVolumeValue"),
    voiceVolumeRange: document.getElementById("voiceVolumeRange"),
    voiceVolumeValue: document.getElementById("voiceVolumeValue"),
    speakerTag: document.getElementById("speakerTag"),
    sceneMeta: document.getElementById("sceneMeta"),
    dialogueText: document.getElementById("dialogueText"),
    choicePanel: document.getElementById("choicePanel"),
    textboxHint: document.getElementById("textboxHint"),
    voiceStatus: document.getElementById("voiceStatus"),
    backgroundLayer: document.getElementById("backgroundLayer"),
    effectOverlay: document.getElementById("effectOverlay"),
    cutinOverlay: document.getElementById("cutinOverlay"),
    cgFrame: document.getElementById("cgFrame"),
    cgLayer: document.getElementById("cgLayer"),
    videoShell: document.getElementById("videoShell"),
    videoLayer: document.getElementById("videoLayer"),
    videoLabel: document.getElementById("videoLabel"),
    videoSkipButton: document.getElementById("videoSkipButton"),
    spriteLayer: document.getElementById("spriteLayer"),
    spriteLeft: document.getElementById("spriteLeft"),
    spriteCenter: document.getElementById("spriteCenter"),
    spriteRight: document.getElementById("spriteRight"),
    chapterCard: document.getElementById("chapterCard"),
    chapterCardEyebrow: document.getElementById("chapterCardEyebrow"),
    chapterCardTitle: document.getElementById("chapterCardTitle"),
    chapterCardSubtitle: document.getElementById("chapterCardSubtitle"),
    propCard: document.getElementById("propCard"),
    propImage: document.getElementById("propImage"),
    propTitle: document.getElementById("propTitle"),
    propCaption: document.getElementById("propCaption"),
    routeBadge: document.getElementById("routeBadge"),
    routeBadgeCurrent: document.getElementById("routeBadgeCurrent"),
    routePanel: document.getElementById("routePanel"),
    routePanelTitle: document.getElementById("routePanelTitle"),
    routePanelLocation: document.getElementById("routePanelLocation"),
    routeMap: document.getElementById("routeMap"),
    closeRoutePanelButton: document.getElementById("closeRoutePanelButton"),
    autoButton: document.getElementById("autoButton"),
    hideTextboxButton: document.getElementById("hideTextboxButton"),
    showTextboxButton: document.getElementById("showTextboxButton"),
    settingButton: document.getElementById("settingButton"),
    muteButton: document.getElementById("muteButton"),
    galleryButton: document.getElementById("galleryButton"),
    returnToTitleButton: document.getElementById("returnToTitleButton"),
    languageZhButton: document.getElementById("languageZhButton"),
    languageEnButton: document.getElementById("languageEnButton"),
    backlogButton: document.getElementById("backlogButton"),
    resetButton: document.getElementById("resetButton"),
    settingOverlay: document.getElementById("settingOverlay"),
    backlogOverlay: document.getElementById("backlogOverlay"),
    galleryOverlay: document.getElementById("galleryOverlay"),
    creditsOverlay: document.getElementById("creditsOverlay"),
    confirmOverlay: document.getElementById("confirmOverlay"),
    chapterList: document.getElementById("chapterList"),
    backlogList: document.getElementById("backlogList"),
    galleryTabCg: document.getElementById("galleryTabCg"),
    galleryTabBgm: document.getElementById("galleryTabBgm"),
    gallerySectionCg: document.getElementById("gallerySectionCg"),
    gallerySectionBgm: document.getElementById("gallerySectionBgm"),
    galleryCgList: document.getElementById("galleryCgList"),
    galleryBgmList: document.getElementById("galleryBgmList"),
    cgPreviewOverlay: document.getElementById("cgPreviewOverlay"),
    cgPreviewTitle: document.getElementById("cgPreviewTitle"),
    cgPreviewChapter: document.getElementById("cgPreviewChapter"),
    cgPreviewImage: document.getElementById("cgPreviewImage"),
    closeSettingButton: document.getElementById("closeSettingButton"),
    closeBacklogButton: document.getElementById("closeBacklogButton"),
    closeGalleryButton: document.getElementById("closeGalleryButton"),
    closeCgPreviewButton: document.getElementById("closeCgPreviewButton"),
    closeCreditsButton: document.getElementById("closeCreditsButton"),
    cancelConfirmButton: document.getElementById("cancelConfirmButton"),
    cancelStartButton: document.getElementById("cancelStartButton"),
    confirmStartButton: document.getElementById("confirmStartButton"),
    stageShell: document.getElementById("stageShell"),
    textboxShell: document.getElementById("textboxShell")
  };

  const spriteMap = {
    left: ui.spriteLeft,
    center: ui.spriteCenter,
    right: ui.spriteRight
  };

  const chapterMeta = story.chapters.map((chapter, index) => {
    const startIndex = story.lines.findIndex((line) => line.chapterId === chapter.id);
    const nextChapter = story.chapters[index + 1];
    const nextStartIndex = nextChapter
      ? story.lines.findIndex((line) => line.chapterId === nextChapter.id)
      : story.lines.length;

    return {
      ...chapter,
      order: index,
      startIndex,
      endIndex: nextStartIndex - 1
    };
  });

  const chapterMetaById = Object.fromEntries(chapterMeta.map((chapter) => [chapter.id, chapter]));
  const routeSteps = isEn ? [
    { id: "garden",   label: "The Garden",         hint: "By the fountain / Before the flower bed" },
    { id: "boundary", label: "The Boundary Path",  hint: "The road toward the sea" },
    { id: "station",  label: "Blank Platform",      hint: "Waiting area / Bench section" },
    { id: "unnamed",  label: "Unnamed Domain",      hint: "A place not yet finished being written" },
    { id: "fissure",  label: "White Fissure",       hint: "A gap that cannot be observed" },
    { id: "first",    label: "First Space",          hint: "Recording" },
    { id: "second",   label: "Second Space",         hint: "Conclusion" },
    { id: "third",    label: "Third Space",          hint: "Completion" },
    { id: "world",    label: "World Choice Layer",   hint: "Whether the path is adopted" },
    { id: "sea",      label: "The Shore",            hint: "We finally made it here" },
    { id: "return",   label: "Back to the Garden",   hint: "Ordinary days after the sea" }
  ] : [
    { id: "garden",   label: "庭院",      hint: "喷泉边 / 花圃前" },
    { id: "boundary", label: "边界小路",  hint: "往海去的路" },
    { id: "station",  label: "空白站台",  hint: "候车区 / 长椅区" },
    { id: "unnamed",  label: "未命名域",  hint: "还没被写完的地方" },
    { id: "fissure",  label: "白缝",      hint: "不可观看的缝隙" },
    { id: "first",    label: "第一空间",  hint: "记录" },
    { id: "second",   label: "第二空间",  hint: "结论" },
    { id: "third",    label: "第三空间",  hint: "完成" },
    { id: "world",    label: "世界选择层", hint: "路径是否被采纳" },
    { id: "sea",      label: "海边",      hint: "终于走到这里" },
    { id: "return",   label: "回庭院",    hint: "海后的日常" }
  ];
  const routeStepIds = new Set(routeSteps.map((step) => step.id));
  const preBranchRouteIds = ["garden", "boundary", "station", "unnamed", "fissure"];
  const branchRouteIds = ["first", "second", "third"];
  const postBranchRouteIds = ["world", "sea", "return"];
  const routeGroupOrder = ["garden", "boundary", "station", "unnamed", "fissure", "branch", "world", "sea", "return"];
  const routeNodeElements = new Map();
  let routeBranchShell = null;
  const preloadedImages = new Map();
  const preloadedVideos = new Map();
  const preloadedVoices = new Map();
  const galleryCgs = collectUniqueCgs();
  const galleryBgms = collectUniqueBgms();

  const bgmAudio = new Audio();
  bgmAudio.loop = true;
  bgmAudio.volume = 0.55;

  const galleryAudio = new Audio();
  galleryAudio.loop = true;
  galleryAudio.volume = 0.55;

  const voiceAudio = new Audio();
  voiceAudio.loop = false;
  voiceAudio.preload = "auto";
  voiceAudio.volume = 0.92;

  const state = {
    index: 0,
    backlog: [],
    autoMode: false,
    autoTimer: null,
    typingTimer: null,
    preLineTimer: null,
    bgmFadeTimer: null,
    chapterCardTimer: null,
    sceneGateTimer: null,
    cgRevealTimer: null,
    propDisplayTimer: null,
    propHideTimer: null,
    typingDone: true,
    pendingOnDone: null,
    pendingLineStarter: null,
    deferredLineStarter: null,
    audioUnlocked: false,
    muted: false,
    currentBgmSrc: null,
    currentBgmTargetVolume: 0.55,
    currentBgmLabel: "Not started",
    bgmMasterVolume: 1,
    currentVoiceSrc: null,
    currentVoiceBaseVolume: 0.92,
    currentVoiceStatus: null,
    voiceMasterVolume: 1,
    currentGalleryBgmSrc: null,
    currentVideoSrc: null,
    coverActive: true,
    chapterCardActive: false,
    cgRevealLocked: false,
    videoActive: false,
    videoSkippable: false,
    awaitingCgRevealTap: false,
    userTextboxHidden: false,
    systemTextboxHidden: false,
    textboxHidden: false,
    unlockedChapters: new Set(),
    completedChapters: new Set(),
    seenCgs: new Set(),
    seenBgms: new Set(),
    currentProp: null,
    propLockedUntil: 0,
    effectTimers: [],
    routePanelOpen: false,
    currentRouteStepId: null,
    visitedRouteSteps: new Set(),
    choiceActive: false,
    usedChoiceOptions: {},
    lastTrapTraces: [],
    renderToken: 0
  };

  hydrateProgressState();
  preloadVisualAssets();
  buildChapterMenu();
  buildRouteMap();
  bindEvents();
  syncAudioControls();
  syncLanguageControls();
  applyAudioMix();
  preloadChapterVoices(story.lines[state.index]?.chapterId);

  const routeNoteEl = document.querySelector(".route-panel-note");
  if (routeNoteEl) {
    routeNoteEl.textContent = ui_strings.routeNote;
  }

  openCover();
  resumeAfterLanguageSwitchIfNeeded();
  autoStartIfNeeded();

  function saveProgress() {
    const payload = {
      index: state.index,
      unlockedChapters: Array.from(state.unlockedChapters),
      completedChapters: Array.from(state.completedChapters),
      seenCgs: Array.from(state.seenCgs),
      seenBgms: Array.from(state.seenBgms),
      visitedRouteSteps: Array.from(state.visitedRouteSteps),
      usedChoiceOptions: state.usedChoiceOptions,
      lastTrapTraces: state.lastTrapTraces,
      bgmMasterVolume: state.bgmMasterVolume,
      voiceMasterVolume: state.voiceMasterVolume
    };
    window.localStorage.setItem(storageKey, JSON.stringify(payload));
  }

  function hasStoredProgress() {
    return Boolean(window.localStorage.getItem(storageKey));
  }

  function bindEvents() {
    ui.stageShell.addEventListener("pointerup", handleAdvanceClick);
    ui.textboxShell.addEventListener("pointerup", handleAdvanceClick);

    ui.stageShell.addEventListener("dragstart", (event) => {
      event.preventDefault();
    });
    ui.textboxShell.addEventListener("dragstart", (event) => {
      event.preventDefault();
    });
    ui.propCard.addEventListener("dragstart", (event) => {
      event.preventDefault();
    });

    ui.propCard.addEventListener("click", (event) => {
      if (!state.currentProp) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      playUiClick();
      openCgPreview({
        src: state.currentProp.src,
        label: state.currentProp.title,
        chapter: state.currentProp.caption || state.currentProp.chapter || "Story Item"
      });
    });

    ui.routeBadge.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      playUiClick();
      setRoutePanel(!state.routePanelOpen);
    });

    ui.closeRoutePanelButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      playUiClick();
      setRoutePanel(false);
    });

    ui.routePanel.addEventListener("pointerup", (event) => {
      event.stopPropagation();
    });

    ui.autoButton.addEventListener("click", (event) => {
      event.stopPropagation();
      unlockAudio();
      playUiClick();
      toggleAutoMode();
    });

    ui.hideTextboxButton.addEventListener("click", (event) => {
      event.stopPropagation();
      playUiClick();
      setTextboxVisibility(false);
    });

    ui.showTextboxButton.addEventListener("click", (event) => {
      event.stopPropagation();
      playUiClick();
      setTextboxVisibility(true);
    });

    ui.settingButton.addEventListener("click", (event) => {
      event.stopPropagation();
      playUiClick();
      setOverlay(ui.settingOverlay, true);
    });

    ui.backlogButton.addEventListener("click", (event) => {
      event.stopPropagation();
      playUiClick();
      renderBacklog();
      setOverlay(ui.backlogOverlay, true);
    });

    ui.muteButton.addEventListener("click", (event) => {
      event.stopPropagation();
      unlockAudio();
      playUiClick();
      toggleMute();
    });

    ui.bgmVolumeRange.addEventListener("input", (event) => {
      const value = Number(event.target.value) / 100;
      state.bgmMasterVolume = clampVolume(value);
      syncAudioControls();
      applyAudioMix();
      saveProgress();
    });

    ui.voiceVolumeRange.addEventListener("input", (event) => {
      const value = Number(event.target.value) / 100;
      state.voiceMasterVolume = clampVolume(value);
      syncAudioControls();
      applyAudioMix();
      saveProgress();
    });

    [
      [ui.coverLanguageZhButton, "zh"],
      [ui.coverLanguageEnButton, "en"],
      [ui.languageZhButton, "zh"],
      [ui.languageEnButton, "en"]
    ].forEach(([button, language]) => {
      if (!button) {
        return;
      }

      button.addEventListener("click", (event) => {
        event.stopPropagation();
        playUiClick();
        switchLanguage(language);
      });
    });

    ui.returnToTitleButton.addEventListener("click", (event) => {
      event.stopPropagation();
      playUiClick();
      returnToTitle();
    });

    ui.resetButton.addEventListener("click", (event) => {
      event.stopPropagation();
      unlockAudio();
      playUiClick();
      resetProgress();
    });

    ui.closeSettingButton.addEventListener("click", (event) => {
      event.stopPropagation();
      playUiClick();
      setOverlay(ui.settingOverlay, false);
    });

    ui.closeBacklogButton.addEventListener("click", (event) => {
      event.stopPropagation();
      playUiClick();
      setOverlay(ui.backlogOverlay, false);
    });

    ui.settingOverlay.addEventListener("click", (event) => {
      if (event.target === ui.settingOverlay) {
        setOverlay(ui.settingOverlay, false);
      }
    });

    ui.backlogOverlay.addEventListener("click", (event) => {
      if (event.target === ui.backlogOverlay) {
        setOverlay(ui.backlogOverlay, false);
      }
    });

    ui.galleryOverlay.addEventListener("click", (event) => {
      if (event.target === ui.galleryOverlay) {
        setOverlay(ui.galleryOverlay, false);
      }
    });

    ui.cgPreviewOverlay.addEventListener("click", (event) => {
      if (event.target === ui.cgPreviewOverlay) {
        setOverlay(ui.cgPreviewOverlay, false);
      }
    });

    ui.creditsOverlay.addEventListener("click", (event) => {
      if (event.target === ui.creditsOverlay) {
        setOverlay(ui.creditsOverlay, false);
      }
    });

    ui.confirmOverlay.addEventListener("click", (event) => {
      if (event.target === ui.confirmOverlay) {
        setOverlay(ui.confirmOverlay, false);
      }
    });

    ui.galleryButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      playUiClick();
      renderGallery();
      setGalleryTab("cg");
      setOverlay(ui.galleryOverlay, true);
    });

    ui.coverGalleryButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      playUiClick();
      renderGallery();
      setGalleryTab("cg");
      setOverlay(ui.galleryOverlay, true);
    });

    ui.galleryTabCg.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      playUiClick();
      setGalleryTab("cg");
    });

    ui.galleryTabBgm.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      playUiClick();
      setGalleryTab("bgm");
    });

    ui.coverCreditsButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      playUiClick();
      setOverlay(ui.creditsOverlay, true);
    });

    ui.closeGalleryButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      playUiClick();
      setOverlay(ui.galleryOverlay, false);
    });

    ui.closeCgPreviewButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      playUiClick();
      setOverlay(ui.cgPreviewOverlay, false);
    });

    ui.closeCreditsButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      playUiClick();
      setOverlay(ui.creditsOverlay, false);
    });

    ui.cancelConfirmButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      playUiClick();
      setOverlay(ui.confirmOverlay, false);
    });

    ui.cancelStartButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      playUiClick();
      setOverlay(ui.confirmOverlay, false);
    });

    ui.confirmStartButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      unlockAudio();
      playUiClick();
      setOverlay(ui.confirmOverlay, false);
      state.coverActive = false;
      setOverlay(ui.coverOverlay, false);
      resetProgress();
    });

    ui.coverStartButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      playUiClick();
      setOverlay(ui.confirmOverlay, true);
    });

    ui.coverContinueButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      unlockAudio();
      playUiClick();
      state.coverActive = false;
      setOverlay(ui.coverOverlay, false);
      renderCurrentLine(false);
    });

    ui.videoSkipButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (!state.videoActive || !state.videoSkippable) {
        return;
      }
      playUiClick();
      finishVideoLine(true);
    });

    voiceAudio.addEventListener("playing", () => {
      setVoiceStatus("playing");
    });

    voiceAudio.addEventListener("waiting", () => {
      if (state.currentVoiceSrc) {
        setVoiceStatus("loading");
      }
    });

    voiceAudio.addEventListener("canplay", () => {
      if (state.currentVoiceSrc && voiceAudio.paused) {
        setVoiceStatus("ready");
      }
    });

    voiceAudio.addEventListener("pause", () => {
      if (!state.currentVoiceSrc) {
        setVoiceStatus(null);
        return;
      }
      if (voiceAudio.ended) {
        setVoiceStatus("ready");
        return;
      }
      setVoiceStatus("ready");
    });

    voiceAudio.addEventListener("ended", () => {
      if (state.currentVoiceSrc) {
        setVoiceStatus("ready");
      }
    });

    voiceAudio.addEventListener("error", () => {
      if (state.currentVoiceSrc) {
        setVoiceStatus("missing");
      }
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        unlockAudio();
        advanceOrComplete();
      }

      if (event.key.toLowerCase() === "a") {
        unlockAudio();
        toggleAutoMode();
      }

      if (event.key.toLowerCase() === "m") {
        unlockAudio();
        toggleMute();
      }

      if (event.key.toLowerCase() === "b") {
        renderBacklog();
        setOverlay(ui.backlogOverlay, true);
      }

      if (event.key.toLowerCase() === "s") {
        setOverlay(ui.settingOverlay, true);
      }

      if (event.key.toLowerCase() === "h") {
        setTextboxVisibility(state.textboxHidden);
      }

      if (event.key === "Escape") {
        setRoutePanel(false);
        setOverlay(ui.settingOverlay, false);
        setOverlay(ui.backlogOverlay, false);
        setOverlay(ui.galleryOverlay, false);
        setOverlay(ui.cgPreviewOverlay, false);
        setOverlay(ui.creditsOverlay, false);
        setOverlay(ui.confirmOverlay, false);
        setTextboxVisibility(true);
      }
    });
  }

  function handleAdvanceClick(event) {
    event.stopPropagation();

    if (event.target.closest("button")) {
      return;
    }

    if (state.routePanelOpen) {
      return;
    }

    if (state.choiceActive) {
      return;
    }

    if (state.coverActive || state.chapterCardActive || state.cgRevealLocked || state.videoActive) {
      return;
    }

    if (resumeDeferredSceneIfReady()) {
      unlockAudio();
      return;
    }

    if (state.textboxHidden) {
      setTextboxVisibility(true);
      return;
    }

    unlockAudio();
    advanceOrComplete();
  }

  function buildChapterMenu() {
    ui.chapterList.innerHTML = "";

    chapterMeta.forEach((chapter) => {
      const isUnlocked = state.unlockedChapters.has(chapter.id);
      const isCompleted = state.completedChapters.has(chapter.id);
      const button = document.createElement("button");
      button.type = "button";
      button.className = "chapter-item";
      button.disabled = !isUnlocked;

      if (!isUnlocked) {
        button.classList.add("is-locked");
      }

      let statusText = "Locked";
      if (isUnlocked) {
        statusText = isCompleted ? "Read" : "Unlocked";
      }

      button.innerHTML = `<h3>${chapter.title}</h3><span>${chapter.subtitle} - ${statusText}</span>`;
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        if (!isUnlocked) {
          return;
        }
        unlockAudio();
        playUiClick();
        state.index = Math.max(chapter.startIndex, 0);
        saveProgress();
        setOverlay(ui.settingOverlay, false);
        renderCurrentLine(true);
      });

      ui.chapterList.appendChild(button);
    });
  }

  function buildRouteMap() {
    syncRouteMapState();
  }

  function clearChoicePanel() {
    state.choiceActive = false;
    ui.choicePanel.hidden = true;
    ui.choicePanel.innerHTML = "";
  }

  function markChoiceOptionUsed(choiceId, optionId) {
    if (!choiceId || !optionId) {
      return;
    }
    if (!Array.isArray(state.usedChoiceOptions[choiceId])) {
      state.usedChoiceOptions[choiceId] = [];
    }
    if (!state.usedChoiceOptions[choiceId].includes(optionId)) {
      state.usedChoiceOptions[choiceId].push(optionId);
    }
  }

  function renderChoiceOptions(line) {
    const options = Array.isArray(line.options) ? line.options : [];
    clearChoicePanel();

    if (!options.length) {
      return;
    }

    state.choiceActive = true;
    ui.choicePanel.hidden = false;
    ui.choicePanel.innerHTML = "";
    ui.textboxHint.textContent = "Make a choice";

    const usedOptionIds = new Set(Array.isArray(state.usedChoiceOptions[line.choiceId]) ? state.usedChoiceOptions[line.choiceId] : []);

    options.forEach((option, index) => {
      const button = document.createElement("button");
      const isUsed = usedOptionIds.has(option.id);
      button.type = "button";
      button.className = `choice-option ${option.result === "continue" ? "is-primary" : ""}`.trim();
      button.disabled = isUsed;
      if (isUsed) {
        button.classList.add("is-burned");
      }
      button.innerHTML = `
        <span class="choice-option-label">${option.label || "……"}</span>
        <span class="choice-option-note">${isUsed ? ui_strings.alreadyTried : option.note || (option.result === "continue" ? ui_strings.letThemChoose : ui_strings.speakForThem)}</span>
      `;
      button.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (button.disabled) {
          return;
        }
        unlockAudio();
        playUiClick();
        handleChoiceSelection(line, option);
      });
      ui.choicePanel.appendChild(button);
    });
  }

  function handleChoiceSelection(line, option) {
    if (!option || !line) {
      return;
    }

    if (option.result === "trap") {
      markChoiceOptionUsed(line.choiceId, option.id);
      state.lastTrapTraces.push(option.traceText || ui_strings.defaultTrapTrace);
      saveProgress();
      clearChoicePanel();
      clearAutoTimer();
      clearLineEffects();
      ui.speakerTag.textContent = option.speaker || ui_strings.narration;
      ui.dialogueText.textContent = option.trapMessage || ui_strings.defaultTrap;
      ui.textboxHint.textContent = "Read it";
      state.typingDone = true;

      const readDelay = option.readDelay ?? 2400;
      const glitchDelay = option.glitchDelay ?? 720;

      queueEffectTimer(() => {
        clearLineEffects();
        triggerLineEffects({
          effects: option.effects || [
            { type: "screenShake", intensity: "medium", duration: 520 },
            { type: "impactFlash", tone: "white", duration: 200 },
            { type: "cutIn", tone: "dark", duration: 760 }
          ]
        });
        ui.textboxHint.textContent = "Returning to title";
      }, readDelay);

      queueEffectTimer(() => {
        returnToTitle();
      }, readDelay + glitchDelay);
      return;
    }

    clearChoicePanel();
    playAdvanceSfx();
    nextLine();
  }

  function createRouteConnector() {
    const connector = document.createElement("div");
    connector.className = "route-connector";
    connector.setAttribute("aria-hidden", "true");
    return connector;
  }

  function createRouteNode(id) {
    const meta = routeSteps.find((step) => step.id === id);
    const node = document.createElement("article");
    node.className = "route-node is-future";
    node.dataset.routeStep = id;
    node.dataset.label = meta?.label || id;
    node.dataset.hint = meta?.hint || "";
    node.innerHTML = `
      <div class="route-node-mark" aria-hidden="true"></div>
      <div class="route-node-label">???</div>
      <div class="route-node-hint">${ui_strings.notRecorded}</div>
    `;
    routeNodeElements.set(id, node);
    return node;
  }

  function createUnknownRouteNode() {
    const node = document.createElement("article");
    node.className = "route-node is-future";
    node.innerHTML = `
      <div class="route-node-mark" aria-hidden="true"></div>
      <div class="route-node-label">???</div>
      <div class="route-node-hint">${ui_strings.notRecorded}</div>
    `;
    return node;
  }

  function applyRouteNodeState(node, id, variant) {
    const meta = routeSteps.find((step) => step.id === id);
    const labelEl = node.querySelector(".route-node-label");
    const hintEl = node.querySelector(".route-node-hint");

    node.classList.remove("is-current", "is-visited", "is-future");
    node.classList.add(`is-${variant}`);

    if (variant === "future") {
      if (labelEl) {
        labelEl.textContent = "???";
      }
      if (hintEl) {
        hintEl.textContent = ui_strings.notRecorded;
      }
      return;
    }

    if (labelEl) {
      labelEl.textContent = meta?.label || id;
    }
    if (hintEl) {
      hintEl.textContent = meta?.hint || "";
    }
  }

  function getRouteGroupId(stepId) {
    if (!stepId) {
      return null;
    }
    return branchRouteIds.includes(stepId) ? "branch" : stepId;
  }

  function hasSeenRouteGroup(groupId) {
    if (groupId === "branch") {
      return branchRouteIds.some((id) => state.visitedRouteSteps.has(id) || state.currentRouteStepId === id);
    }
    return state.visitedRouteSteps.has(groupId) || state.currentRouteStepId === groupId;
  }

  function getLastKnownRouteGroupIndex() {
    let maxIndex = -1;
    routeGroupOrder.forEach((groupId, index) => {
      if (hasSeenRouteGroup(groupId)) {
        maxIndex = index;
      }
    });
    return maxIndex;
  }

  function buildVisibleRouteLane(ids, currentGroupId, nextGroupId) {
    const visibleIds = ids.filter((id) => {
      const groupIndex = routeGroupOrder.indexOf(id);
      const lastKnownIndex = getLastKnownRouteGroupIndex();
      return groupIndex <= lastKnownIndex || id === nextGroupId;
    });

    if (!visibleIds.length) {
      return null;
    }

    const lane = document.createElement("div");
    lane.className = "route-lane";

    visibleIds.forEach((id, index) => {
      const isCurrent = currentGroupId === id;
      const isVisited = state.visitedRouteSteps.has(id);
      const node = createRouteNode(id);
      applyRouteNodeState(node, id, isCurrent ? "current" : isVisited ? "visited" : "future");
      lane.appendChild(node);
      if (index < visibleIds.length - 1) {
        lane.appendChild(createRouteConnector());
      }
    });

    return lane;
  }

  function buildVisibleRouteBranch(currentGroupId, nextGroupId) {
    const hasBranchProgress = branchRouteIds.some((id) => state.visitedRouteSteps.has(id) || state.currentRouteStepId === id);
    const shouldShowBranch = hasBranchProgress || nextGroupId === "branch";

    if (!shouldShowBranch) {
      routeBranchShell = null;
      return null;
    }

    routeBranchShell = document.createElement("section");
    routeBranchShell.className = "route-branch-shell";
    routeBranchShell.setAttribute("aria-label", ui_strings.tripleSphere);
    routeBranchShell.dataset.label = ui_strings.tripleSphereLabel;

    const header = document.createElement("div");
    header.className = "route-branch-header";
    header.textContent = hasBranchProgress ? routeBranchShell.dataset.label : "???";
    routeBranchShell.appendChild(header);

    const branchGrid = document.createElement("div");
    branchGrid.className = "route-branch-grid";

    if (!hasBranchProgress) {
      branchGrid.appendChild(createUnknownRouteNode());
      routeBranchShell.appendChild(branchGrid);
      return routeBranchShell;
    }

    const visibleBranchIds = branchRouteIds.filter((id) => state.visitedRouteSteps.has(id) || state.currentRouteStepId === id);
    visibleBranchIds.forEach((id) => {
      const node = createRouteNode(id);
      applyRouteNodeState(node, id, state.currentRouteStepId === id ? "current" : "visited");
      branchGrid.appendChild(node);
    });

    const postBranchStarted = postBranchRouteIds.some((id) => state.visitedRouteSteps.has(id) || state.currentRouteStepId === id);
    const unresolvedBranch = currentGroupId === "branch" && !postBranchStarted && visibleBranchIds.length < branchRouteIds.length;
    if (unresolvedBranch) {
      branchGrid.appendChild(createUnknownRouteNode());
    }

    routeBranchShell.classList.toggle("is-current", currentGroupId === "branch");
    routeBranchShell.appendChild(branchGrid);
    return routeBranchShell;
  }

  function resolveRouteStepId(line, chapter) {
    const source = String(line.location || chapter?.location || "");

    if (/世界选择层|World Choice Layer/i.test(source)) {
      return "world";
    }
    if (/第三空间|Third Space/i.test(source)) {
      return "third";
    }
    if (/第二空间|Second Space/i.test(source)) {
      return "second";
    }
    if (/第一空间|First Space/i.test(source)) {
      return "first";
    }
    if (/白缝|White Fissure/i.test(source)) {
      return "fissure";
    }
    if (/(无名回廊|未命名域|残留区域|Unnamed Domain|Nameless Corridor)/i.test(source)) {
      return "unnamed";
    }
    if (/(空白站台|边缘站台|月台|站台|站牌|候车|长椅|Blank Platform|Edge Station)/i.test(source)) {
      return "station";
    }
    if (/(边界小路|边界尽头|泉台途中|Boundary Path)/i.test(source)) {
      return "boundary";
    }
    if (/(海边|海岸|海边的路|海边之后|海边后侧|The Shore|Shore and the Garden)/i.test(source)) {
      return "sea";
    }
    if (/(回程|庭院入夜前|庭院回廊|庭院深夜|海边与庭院|长桌尽头|回廊最深处|Back to the Garden)/i.test(source)) {
      return "return";
    }
    if (/(梦醒后的庭院|喷泉边|花圃前|回廊口|庭院外缘|Garden After Alice|The Garden)/i.test(source)) {
      return "garden";
    }

    return state.currentRouteStepId || "garden";
  }

  function updateRouteProgress(line, chapter, sceneLabel) {
    const routeStepId = resolveRouteStepId(line, chapter);
    state.currentRouteStepId = routeStepId;
    state.visitedRouteSteps.add(routeStepId);
    ui.routeBadgeCurrent.textContent = sceneLabel || routeSteps.find((step) => step.id === routeStepId)?.label || ui_strings.unknownLocation;
    ui.routePanelTitle.textContent = chapter ? `${chapter.title} · ${ui_strings.routeMemoryLabel}` : ui_strings.routeMemory;
    ui.routePanelLocation.textContent = sceneLabel || routeSteps.find((step) => step.id === routeStepId)?.label || "";
    syncRouteMapState();
  }

  function syncRouteMapState() {
    ui.routeMap.innerHTML = "";
    routeNodeElements.clear();

    const currentGroupId = getRouteGroupId(state.currentRouteStepId);
    const lastKnownIndex = getLastKnownRouteGroupIndex();
    const nextGroupId = lastKnownIndex >= 0 ? routeGroupOrder[lastKnownIndex + 1] || null : null;

    const laneStart = buildVisibleRouteLane(preBranchRouteIds, currentGroupId, nextGroupId);
    const branchShell = buildVisibleRouteBranch(currentGroupId, nextGroupId);
    const laneEnd = buildVisibleRouteLane(postBranchRouteIds, currentGroupId, nextGroupId);

    if (laneStart) {
      ui.routeMap.appendChild(laneStart);
    }
    if (branchShell) {
      ui.routeMap.appendChild(branchShell);
    }
    if (laneEnd) {
      ui.routeMap.appendChild(laneEnd);
    }
  }

  function setRoutePanel(visible) {
    state.routePanelOpen = visible;
    ui.routePanel.hidden = !visible;
    ui.routeBadge.setAttribute("aria-expanded", visible ? "true" : "false");
    if (visible) {
      ui.textboxHint.textContent = "Route memory open";
    } else if (!ui.galleryOverlay.hidden) {
      ui.textboxHint.textContent = "Gallery open";
    } else {
      ui.textboxHint.textContent = state.autoMode ? "Auto playing" : "Tap to continue";
    }
  }

  function renderCurrentLine(forceCard) {
    clearAutoTimer();
    clearTypingTimer();
    clearPreLineTimer();
    clearChapterCardTimer();
    clearCgRevealTimer();
    clearPropTimers();
    clearChoicePanel();
    stopVoice();
    stopVideoPlayback(false);

    const line = story.lines[state.index];
    const chapter = story.chapters.find((item) => item.id === line.chapterId);
    preloadChapterVoices(line.chapterId);
      const sceneLabel = line.location || chapter?.location || "";
      const chapterLabel = chapter ? `${chapter.title} - ${chapter.subtitle}` : story.title;

      ui.chapterName.textContent = chapterLabel;
      ui.locationName.textContent = sceneLabel;
      ui.sceneMeta.textContent = sceneLabel ? `${chapter?.title || story.title} - ${sceneLabel}` : chapterLabel;
      ui.speakerTag.textContent = line.speaker || "Narration";
      updateRouteProgress(line, chapter, sceneLabel);

      clearLineEffects();
    applyBackground(line);
    applyCg(line);
    applySprites(line);
    applyProp(line, chapter);
    triggerLineEffects(line);
    updateBgm(line);
    ui.textboxShell.classList.toggle("is-cg-scene", Boolean(line.cg));

    if (line.video || line.type === "video") {
      startVideoLine(line, chapter);
      return;
    }

    const renderToken = ++state.renderToken;
    const beginLine = (skipTyping = false) => {
      if (renderToken !== state.renderToken) {
        return;
      }

      state.preLineTimer = null;
      state.pendingLineStarter = null;

      if (line.sfxAtStart) {
        playSfx(line.sfxAtStart, line.sfxAtStartVolume);
      }

      updateVoice(line);

      typeText(
        line.text || "",
        { ...line, instant: skipTyping || Boolean(line.instant) },
        () => {
          if (line.type === "card" && !line.text) {
            const autoCardDelay = (line.cardDuration ?? defaultCardDuration) + (line.pauseAfter ?? 0);
            state.autoTimer = window.setTimeout(() => {
              if (state.coverActive || !ui.settingOverlay.hidden || !ui.backlogOverlay.hidden || !ui.galleryOverlay.hidden || !ui.cgPreviewOverlay.hidden || !ui.creditsOverlay.hidden || !ui.confirmOverlay.hidden) {
                return;
              }
              nextLine();
            }, autoCardDelay);
            return;
          }

          if (line.sfx) {
            playSfx(line.sfx, line.sfxVolume);
          }

          if (line.type !== "card" && line.text) {
            state.backlog.push({
              speaker: line.speaker || "Narration",
              text: line.text
            });
          }

          if (state.backlog.length > 160) {
            state.backlog.shift();
          }

          if (line.type === "choice") {
            renderChoiceOptions(line);
            return;
          }

          if (state.autoMode) {
            scheduleAutoAdvanceForLine(line, renderToken);
          }
        }
      );
    };

    const startWithPause = (skipTyping = false) => {
      const pauseBefore = line.pauseBefore ?? 0;
      if (pauseBefore > 0) {
        ui.dialogueText.textContent = "";
        state.typingDone = false;
        state.pendingOnDone = null;
        state.pendingLineStarter = beginLine;
        ui.textboxHint.textContent = state.autoMode ? "Auto playing" : "Tap to continue";
        state.preLineTimer = window.setTimeout(() => {
          state.preLineTimer = null;
          beginLine(skipTyping);
        }, pauseBefore);
        return;
      }

      beginLine(skipTyping);
    };

    const startAfterCgReveal = () => {
      if (renderToken !== state.renderToken) {
        return;
      }

      if (shouldTriggerFirstCgReveal(line.cg)) {
        state.awaitingCgRevealTap = false;
        state.cgRevealLocked = true;
        state.deferredLineStarter = () => startWithPause(false);
        markCgAsSeen(line.cg);
        setSystemTextboxHidden(true);
        ui.textboxHint.textContent = "CG moment";
        state.cgRevealTimer = window.setTimeout(() => {
          if (renderToken !== state.renderToken) {
            return;
          }
          state.cgRevealTimer = null;
          state.cgRevealLocked = false;
          state.awaitingCgRevealTap = true;
          ui.textboxHint.textContent = "Tap to continue";
        }, 2000);
        return;
      }

      setSystemTextboxHidden(false);
      startWithPause(false);
    };

    if (line.type === "card") {
      setSystemTextboxHidden(true);
      state.chapterCardActive = true;
      showChapterCard(line, chapter, true);
      startWithPause(false);
      return;
    }

    if (forceCard) {
      setSystemTextboxHidden(true);
      state.chapterCardActive = true;
      showChapterCard(line, chapter, true);
      state.sceneGateTimer = window.setTimeout(() => {
        if (renderToken !== state.renderToken) {
          return;
        }
        state.sceneGateTimer = null;
        state.chapterCardActive = false;
        startAfterCgReveal();
      }, line.cardDuration ?? defaultCardDuration);
      return;
    }

    startAfterCgReveal();
  }

  function applyBackground(line) {
    ui.backgroundLayer.className = "background-layer";

    if (line.background) {
      preloadImage(line.background);
      ui.backgroundLayer.style.backgroundImage = `url("${line.background}")`;
      return;
    }

    ui.backgroundLayer.classList.add("void");
    ui.backgroundLayer.style.backgroundImage = "";
  }

  function applyCg(line) {
    if (line.cg) {
      ui.cgFrame.classList.remove("is-landscape", "is-portrait", "is-square");
      setImageSourceWhenReady(ui.cgLayer, line.cg, () => {
        ui.cgLayer.classList.add("is-visible");
      });
      return;
    }

    ui.cgLayer.onload = null;
    ui.cgLayer.removeAttribute("src");
    ui.cgLayer.classList.remove("is-visible");
    ui.cgFrame.classList.remove("is-landscape", "is-portrait", "is-square");
  }

  function applySprites(line) {
    Object.values(spriteMap).forEach((sprite) => {
      sprite.onload = null;
      sprite.removeAttribute("src");
      sprite.classList.remove("is-visible", "is-dim", "fx-jitter-light", "fx-jitter-medium", "fx-jitter-heavy", "fx-glitch");
    });

    if (line.cg || !Array.isArray(line.sprites)) {
      return;
    }

    line.sprites.forEach((spriteDef) => {
      const target = spriteMap[spriteDef.slot];
      if (!target) {
        return;
      }

      setImageSourceWhenReady(target, spriteDef.src, () => {
        target.classList.add("is-visible");
        if (spriteDef.dim) {
          target.classList.add("is-dim");
        }
        triggerSpriteEffectsForSlot(line, spriteDef.slot, target);
      });
    });
  }

  function applyProp(line, chapter) {
    const prop = normalizeProp(line.prop, chapter);
    state.currentProp = prop;
    clearPropTimers();

    ui.propCard.classList.remove("is-visible");

    if (!prop) {
      state.propLockedUntil = 0;
      ui.spriteLayer.classList.remove("is-suppressed");
      ui.propCard.hidden = true;
      ui.propImage.onload = null;
      ui.propImage.removeAttribute("src");
      ui.propTitle.textContent = "";
      ui.propCaption.textContent = "";
      ui.propCaption.hidden = true;
      return;
    }

    ui.propCard.hidden = false;
    ui.spriteLayer.classList.add("is-suppressed");
    ui.propTitle.textContent = prop.title;
    ui.propCaption.textContent = prop.caption || "";
    ui.propCaption.hidden = !prop.caption;
    ui.propCard.setAttribute("aria-label", `Open ${prop.title}`);

    setImageSourceWhenReady(ui.propImage, prop.src, () => {
      const displayMs = prop.displayMs ?? 3000;
      state.propLockedUntil = Date.now() + displayMs;
      ui.propCard.classList.add("is-visible");
    });
  }

  function normalizeEffects(effects) {
    if (!effects) {
      return [];
    }
    return Array.isArray(effects) ? effects : [effects];
  }

  function clearLineEffects() {
    clearEffectTimers();
    ui.stageShell.classList.remove("fx-screen-shake-light", "fx-screen-shake-medium", "fx-screen-shake-heavy");
    Object.values(spriteMap).forEach((sprite) => {
      sprite.classList.remove("fx-jitter-light", "fx-jitter-medium", "fx-jitter-heavy", "fx-glitch");
      sprite.style.removeProperty("--fx-duration");
    });
    ui.effectOverlay.className = "effect-overlay";
    ui.cutinOverlay.className = "cutin-overlay";
    ui.stageShell.style.removeProperty("--fx-duration");
    ui.effectOverlay.style.removeProperty("--fx-duration");
    ui.cutinOverlay.style.removeProperty("--fx-duration");
  }

  function clearEffectTimers() {
    state.effectTimers.forEach((timerId) => window.clearTimeout(timerId));
    state.effectTimers = [];
  }

  function queueEffectTimer(callback, duration) {
    const timerId = window.setTimeout(() => {
      state.effectTimers = state.effectTimers.filter((id) => id !== timerId);
      callback();
    }, duration);
    state.effectTimers.push(timerId);
  }

  function restartClassAnimation(element, className) {
    element.classList.remove(className);
    void element.offsetWidth;
    element.classList.add(className);
  }

  function applyTimedEffectClass(element, className, durationMs) {
    if (!element) {
      return;
    }
    element.style.setProperty("--fx-duration", `${durationMs}ms`);
    restartClassAnimation(element, className);
    queueEffectTimer(() => {
      element.classList.remove(className);
      element.style.removeProperty("--fx-duration");
    }, durationMs + 40);
  }

  function triggerLineEffects(line) {
    normalizeEffects(line.effects)
      .filter((effect) => effect && typeof effect === "object")
      .forEach((effect) => {
        switch (effect.type) {
          case "screenShake": {
            const intensity = effect.intensity || "medium";
            const durationMs = effect.duration ?? (intensity === "heavy" ? 520 : intensity === "light" ? 300 : 420);
            applyTimedEffectClass(ui.stageShell, `fx-screen-shake-${intensity}`, durationMs);
            break;
          }
          case "cutIn": {
            const tone = effect.tone || "soft";
            const durationMs = effect.duration ?? 360;
            ui.cutinOverlay.className = `cutin-overlay is-active is-${tone}`;
            ui.cutinOverlay.style.setProperty("--fx-duration", `${durationMs}ms`);
            queueEffectTimer(() => {
              ui.cutinOverlay.className = "cutin-overlay";
              ui.cutinOverlay.style.removeProperty("--fx-duration");
            }, durationMs + 40);
            break;
          }
          case "impactFlash": {
            const tone = effect.tone || "white";
            const durationMs = effect.duration ?? 240;
            ui.effectOverlay.className = `effect-overlay is-flash-${tone}`;
            ui.effectOverlay.style.setProperty("--fx-duration", `${durationMs}ms`);
            queueEffectTimer(() => {
              ui.effectOverlay.className = "effect-overlay";
              ui.effectOverlay.style.removeProperty("--fx-duration");
            }, durationMs + 40);
            break;
          }
          default:
            break;
        }
      });
  }

  function triggerSpriteEffectsForSlot(line, slot, target) {
    normalizeEffects(line.effects)
      .filter((effect) => effect && typeof effect === "object")
      .forEach((effect) => {
        const effectSlot = effect.slot || effect.targetSlot;
        if (effectSlot !== slot) {
          return;
        }

        if (effect.type === "spriteShake") {
          const intensity = effect.intensity || "medium";
          const durationMs = effect.duration ?? (intensity === "heavy" ? 460 : intensity === "light" ? 280 : 360);
          applyTimedEffectClass(target, `fx-jitter-${intensity}`, durationMs);
          return;
        }

        if (effect.type === "spriteGlitch") {
          const durationMs = effect.duration ?? 360;
          applyTimedEffectClass(target, "fx-glitch", durationMs);
        }
      });
  }

  function updateBgm(line) {
    if (!line.bgm) {
      ui.bgmName.textContent = state.currentBgmLabel;
      return;
    }

    state.currentBgmLabel = line.bgmName || "Playing";
    ui.bgmName.textContent = state.currentBgmLabel;
    markBgmAsSeen(line.bgm);

    const targetVolume = typeof line.bgmVolume === "number" ? line.bgmVolume : 0.55;
    if (state.currentBgmSrc === line.bgm) {
      state.currentBgmTargetVolume = targetVolume;
      if (!state.muted) {
        bgmAudio.volume = getEffectiveBgmVolume(targetVolume);
        if (state.audioUnlocked && bgmAudio.paused) {
          bgmAudio.play().catch(() => {});
        }
      }
      return;
    }

    state.currentBgmSrc = line.bgm;
    state.currentBgmTargetVolume = targetVolume;
    transitionBgm(line.bgm, targetVolume, line.bgmFadeMs ?? 650);
  }

  function startVideoLine(line, chapter) {
    const src = line.video;
    if (!src) {
      nextLine();
      return;
    }

    const renderToken = ++state.renderToken;
    state.videoActive = true;
    state.videoSkippable = line.videoSkippable !== false;
    state.currentVideoSrc = src;

    ui.videoShell.hidden = false;
    ui.videoShell.classList.add("is-visible");
    ui.videoLabel.hidden = !line.videoLabel;
    ui.videoLabel.textContent = line.videoLabel || "";
    ui.videoSkipButton.hidden = !state.videoSkippable;

    setSystemTextboxHidden(true);
    ui.sceneMeta.textContent = line.location || chapter?.location || "Movie";
    ui.speakerTag.textContent = line.speaker || "Movie";
    ui.dialogueText.textContent = "";
    ui.textboxHint.textContent = state.videoSkippable ? "Video playing" : "Video locked";

    const shouldKeepBgm = line.videoKeepBgm === true;
    if (!shouldKeepBgm) {
      bgmAudio.pause();
    }

    preloadVideo(src);
    ui.videoLayer.pause();
    ui.videoLayer.removeAttribute("poster");
    ui.videoLayer.currentTime = 0;
    ui.videoLayer.src = src;
    ui.videoLayer.loop = Boolean(line.videoLoop);
    ui.videoLayer.muted = state.muted || !state.audioUnlocked || line.videoMuted === true;
    ui.videoLayer.volume = typeof line.videoVolume === "number" ? line.videoVolume : 1;
    if (line.poster) {
      ui.videoLayer.poster = line.poster;
      preloadImage(line.poster);
    }

    const onEnded = () => {
      if (renderToken !== state.renderToken) {
        return;
      }
      finishVideoLine(false, line.pauseAfterVideo ?? 0);
    };

    const onError = () => {
      if (renderToken !== state.renderToken) {
        return;
      }
      finishVideoLine(true, 0);
    };

    ui.videoLayer.onended = onEnded;
    ui.videoLayer.onerror = onError;
    ui.videoLayer.onloadedmetadata = null;

    ui.videoLayer.play().catch(() => {
      // Keep the video frame visible and allow manual skip if autoplay is blocked.
      ui.textboxHint.textContent = state.videoSkippable ? "Tap Skip to continue" : "Video ready";
    });
  }

  function finishVideoLine(skipped, pauseAfterVideo) {
    if (!state.videoActive) {
      return;
    }

    stopVideoPlayback(true);
    const delay = Math.max(0, pauseAfterVideo || 0);
    if (delay > 0) {
      state.autoTimer = window.setTimeout(() => {
        nextLine();
      }, delay);
      return;
    }

    nextLine();
  }

  function stopVideoPlayback(restoreStoryBgm) {
    ui.videoLayer.onended = null;
    ui.videoLayer.onerror = null;
    ui.videoLayer.onloadedmetadata = null;

    if (!ui.videoLayer.paused) {
      ui.videoLayer.pause();
    }

    if (ui.videoLayer.currentTime) {
      ui.videoLayer.currentTime = 0;
    }

    ui.videoLayer.removeAttribute("src");
    ui.videoLayer.load();

    ui.videoShell.classList.remove("is-visible");
    ui.videoShell.hidden = true;
    ui.videoLabel.hidden = true;
    ui.videoLabel.textContent = "";
    ui.videoSkipButton.hidden = true;

    if (state.videoActive && restoreStoryBgm && state.audioUnlocked && !state.muted && state.currentBgmSrc && bgmAudio.paused) {
      bgmAudio.volume = getEffectiveBgmVolume();
      bgmAudio.play().catch(() => {});
    }

    state.videoActive = false;
    state.videoSkippable = false;
    state.currentVideoSrc = null;
  }

  function updateVoice(line) {
    if (!line.voice) {
      state.currentVoiceSrc = null;
      state.currentVoiceBaseVolume = 0.92;
      state.currentVoiceStatus = null;
      ui.voiceName.textContent = line.voiceKey
        ? (line.speaker ? `${line.speaker} - Slot ready` : "Voice slot ready")
        : "Not set";
      setVoiceStatus(null);
      voiceAudio.pause();
      voiceAudio.removeAttribute("src");
      voiceAudio.load();
      return;
    }

    const preloadEntry = preloadVoice(line.voice);
    state.currentVoiceSrc = line.voice;
    state.currentVoiceBaseVolume = typeof line.voiceVolume === "number" ? line.voiceVolume : 0.92;
    ui.voiceName.textContent = line.speaker ? `${line.speaker} - Linked` : "Linked";

    if (preloadEntry?.status === "error") {
      state.currentVoiceStatus = "missing";
      setVoiceStatus("missing");
      voiceAudio.pause();
      voiceAudio.removeAttribute("src");
      voiceAudio.load();
      return;
    }

    state.currentVoiceStatus = preloadEntry?.status === "loaded" ? "ready" : "loading";
    setVoiceStatus(state.currentVoiceStatus);
    voiceAudio.src = line.voice;
    voiceAudio.volume = state.muted ? 0 : getEffectiveVoiceVolume(state.currentVoiceBaseVolume);

    if (state.audioUnlocked && !state.muted) {
      voiceAudio.play().catch(() => {});
    }
  }

  function showChapterCard(line, chapter) {
    ui.chapterCardEyebrow.textContent = line.eyebrow || "Alice Courtyard";
    ui.chapterCardTitle.textContent = line.title || chapter?.title || "";
    ui.chapterCardSubtitle.textContent = line.subtitle || chapter?.subtitle || "";
    ui.chapterCard.classList.add("is-cinematic");
    ui.chapterCard.classList.add("is-visible");

    state.chapterCardTimer = window.setTimeout(() => {
      state.chapterCardTimer = null;
      state.chapterCardActive = false;
      ui.chapterCard.classList.remove("is-visible");
      ui.chapterCard.classList.remove("is-cinematic");
    }, line.cardDuration ?? defaultCardDuration);
  }

  function typeText(text, line, onDone) {
    ui.dialogueText.textContent = "";
    state.typingDone = false;
    state.pendingOnDone = onDone;
    ui.textboxHint.textContent = state.autoMode ? "Auto playing" : "Tap to continue";

    const lineTypingSpeed = line?.textSpeed ?? defaultTypingSpeed;
    if (!text || line?.instant || lineTypingSpeed <= 0) {
      ui.dialogueText.textContent = text || "";
      state.typingDone = true;
      const callback = state.pendingOnDone;
      state.pendingOnDone = null;
      if (callback) {
        callback();
      }
      return;
    }

    let cursor = 0;
    state.typingTimer = window.setInterval(() => {
      cursor += 1;
      ui.dialogueText.textContent = text.slice(0, cursor);
      if (cursor >= text.length) {
        clearTypingTimer();
        state.typingDone = true;
        const callback = state.pendingOnDone;
        state.pendingOnDone = null;
        if (callback) {
          callback();
        }
      }
    }, lineTypingSpeed);
  }

  function completeTyping() {
    if (state.preLineTimer && state.pendingLineStarter) {
      const starter = state.pendingLineStarter;
      clearPreLineTimer();
      starter(true);
      return;
    }

    clearTypingTimer();
    const line = story.lines[state.index];
    ui.dialogueText.textContent = line.text || "";
    state.typingDone = true;
    if (state.pendingOnDone) {
      const callback = state.pendingOnDone;
      state.pendingOnDone = null;
      callback();
    }
  }

  function advanceOrComplete() {
    if (!ui.settingOverlay.hidden || !ui.backlogOverlay.hidden || !ui.galleryOverlay.hidden || !ui.cgPreviewOverlay.hidden || !ui.creditsOverlay.hidden || !ui.confirmOverlay.hidden) {
      return;
    }

    if (state.routePanelOpen) {
      return;
    }

    if (state.choiceActive) {
      return;
    }

    if (state.coverActive || state.chapterCardActive || state.cgRevealLocked || state.videoActive) {
      return;
    }

    if (resumeDeferredSceneIfReady()) {
      return;
    }

    if (getRemainingPropLockMs() > 0) {
      return;
    }

    if (!state.typingDone || state.preLineTimer) {
      completeTyping();
      return;
    }

    playAdvanceSfx();
    nextLine();
  }

  function nextLine() {
    const remainingPropLockMs = getRemainingPropLockMs();
    if (remainingPropLockMs > 0) {
      clearAutoTimer();
      state.autoTimer = window.setTimeout(nextLine, remainingPropLockMs);
      return;
    }

    clearAutoTimer();
    const currentLine = story.lines[state.index];
    const currentChapterId = currentLine.chapterId;

    if (state.index >= story.lines.length - 1) {
      markChapterComplete(currentChapterId);
      buildChapterMenu();
      saveProgress();
      return;
    }

    state.index += 1;
    const nextChapterId = story.lines[state.index].chapterId;

    if (nextChapterId !== currentChapterId) {
      markChapterComplete(currentChapterId);
      unlockChapter(nextChapterId);
      buildChapterMenu();
    }

    saveProgress();
    renderCurrentLine();
  }

  function canAutoAdvance(renderToken) {
    return (
      state.autoMode &&
      renderToken === state.renderToken &&
      !state.routePanelOpen &&
      !state.choiceActive &&
      !state.coverActive &&
      ui.settingOverlay.hidden &&
      ui.backlogOverlay.hidden &&
      ui.galleryOverlay.hidden &&
      ui.cgPreviewOverlay.hidden &&
      ui.creditsOverlay.hidden &&
      ui.confirmOverlay.hidden
    );
  }

  function scheduleAutoAdvanceForLine(line, renderToken) {
    clearAutoTimer();

    if (!state.autoMode) {
      return;
    }

    const pauseAfter = line.pauseAfter ?? 0;
    const fallbackDelay = (line.autoDelay ?? defaultAutoDelay) + pauseAfter;
    const safeNext = () => {
      if (!canAutoAdvance(renderToken)) {
        return;
      }
      nextLine();
    };

    if (line.type === "card" && !line.text) {
      state.autoTimer = window.setTimeout(safeNext, (line.cardDuration ?? defaultCardDuration) + pauseAfter);
      return;
    }

    const canWaitForVoice =
      Boolean(line.voice) &&
      state.currentVoiceSrc === line.voice &&
      state.currentVoiceStatus !== "missing" &&
      state.audioUnlocked &&
      !state.muted;

    if (!canWaitForVoice) {
      state.autoTimer = window.setTimeout(safeNext, fallbackDelay);
      return;
    }

    const finishAfterPause = () => {
      clearAutoTimer();
      state.autoTimer = window.setTimeout(safeNext, pauseAfter);
    };

    if (
      voiceAudio.ended ||
      (Number.isFinite(voiceAudio.duration) &&
        voiceAudio.duration > 0 &&
        voiceAudio.currentTime >= voiceAudio.duration - 0.05)
    ) {
      finishAfterPause();
      return;
    }

    let watchdogTimer = null;
    let loadingGuardTimer = null;

    const cleanup = () => {
      voiceAudio.removeEventListener("ended", onEnded);
      voiceAudio.removeEventListener("error", onError);
      voiceAudio.removeEventListener("abort", onError);
      if (watchdogTimer) {
        window.clearTimeout(watchdogTimer);
        watchdogTimer = null;
      }
      if (loadingGuardTimer) {
        window.clearTimeout(loadingGuardTimer);
        loadingGuardTimer = null;
      }
    };

    const onEnded = () => {
      cleanup();
      finishAfterPause();
    };

    const onError = () => {
      cleanup();
      state.autoTimer = window.setTimeout(safeNext, fallbackDelay);
    };

    voiceAudio.addEventListener("ended", onEnded);
    voiceAudio.addEventListener("error", onError);
    voiceAudio.addEventListener("abort", onError);

    loadingGuardTimer = window.setTimeout(() => {
      if (!canAutoAdvance(renderToken)) {
        return;
      }
      if (state.currentVoiceSrc === line.voice && state.currentVoiceStatus === "loading") {
        cleanup();
        state.autoTimer = window.setTimeout(safeNext, fallbackDelay);
      }
    }, 1800);

    watchdogTimer = window.setTimeout(() => {
      cleanup();
      state.autoTimer = window.setTimeout(safeNext, fallbackDelay);
    }, 60000);
  }

  function toggleAutoMode() {
    state.autoMode = !state.autoMode;
    ui.autoButton.textContent = state.autoMode ? "Auto On" : "Auto";
    ui.autoButton.classList.toggle("is-active", state.autoMode);

    if (!state.autoMode) {
      clearAutoTimer();
      ui.textboxHint.textContent = "Tap to continue";
      return;
    }

    if (state.typingDone && !state.preLineTimer && !state.coverActive) {
      scheduleAutoAdvanceForLine(story.lines[state.index], state.renderToken);
    }
  }

  function toggleMute() {
    state.muted = !state.muted;
    ui.muteButton.textContent = state.muted ? "Unmute" : "Mute";
    bgmAudio.muted = state.muted;
    voiceAudio.muted = state.muted;
    galleryAudio.muted = state.muted;
    ui.videoLayer.muted = state.muted || !state.audioUnlocked;
    applyAudioMix();

    if (!state.muted && state.audioUnlocked && state.currentBgmSrc && bgmAudio.paused) {
      bgmAudio.volume = getEffectiveBgmVolume();
      bgmAudio.play().catch(() => {});
    }
  }

  function renderBacklog() {
    ui.backlogList.innerHTML = "";
    const fragment = document.createDocumentFragment();

    state.backlog.slice().reverse().forEach((item) => {
      const wrapper = document.createElement("article");
      wrapper.className = "backlog-item";
      wrapper.innerHTML = `<p class="backlog-speaker">${item.speaker}</p><p>${item.text}</p>`;
      fragment.appendChild(wrapper);
    });

    ui.backlogList.appendChild(fragment);
  }

  function setOverlay(target, visible) {
    if (visible) {
      setRoutePanel(false);
    }

    target.hidden = !visible;

    if (target === ui.galleryOverlay) {
      if (visible) {
        ui.textboxHint.textContent = "Gallery open";
      } else {
        stopGalleryBgm(true);
        ui.textboxHint.textContent = state.autoMode ? "Auto playing" : "Tap to continue";
      }
    }
  }

  function setTextboxVisibility(visible) {
    state.userTextboxHidden = !visible;
    syncTextboxVisibility();
  }

  function setSystemTextboxHidden(hidden) {
    state.systemTextboxHidden = hidden;
    syncTextboxVisibility();
  }

  function syncTextboxVisibility() {
    state.textboxHidden = state.userTextboxHidden || state.systemTextboxHidden;
    ui.textboxShell.classList.toggle("is-hidden", state.textboxHidden);
    ui.showTextboxButton.hidden = !state.textboxHidden || state.systemTextboxHidden;
    ui.hideTextboxButton.textContent = "Hide";
  }

  function playUiClick() {
    playSfx("./assets/sfx/sfx_ui_click.wav", 0.4);
  }

  function playAdvanceSfx() {
    playSfx("./assets/sfx/sfx_ui_advance.wav", 0.45);
  }

  function playSfx(src, volume) {
    if (!state.audioUnlocked || state.muted || !src) {
      return;
    }

    const audio = new Audio(src);
    audio.volume = typeof volume === "number" ? volume : 0.5;
    audio.play().catch(() => {});
  }

  function unlockAudio() {
    if (state.audioUnlocked) {
      return;
    }

    state.audioUnlocked = true;
    ui.videoLayer.muted = state.muted;
    if (state.currentBgmSrc && !state.muted) {
      bgmAudio.play().catch(() => {});
    }
    if (state.currentVoiceSrc && !state.muted) {
      voiceAudio.play().catch(() => {});
    }
    if (state.videoActive && !state.muted) {
      ui.videoLayer.play().catch(() => {});
    }
  }

  function clampVolume(value) {
    return Math.max(0, Math.min(1, value));
  }

  function getEffectiveBgmVolume(targetVolume = state.currentBgmTargetVolume) {
    return clampVolume(targetVolume) * state.bgmMasterVolume;
  }

  function getEffectiveVoiceVolume(baseVolume = state.currentVoiceBaseVolume) {
    return clampVolume(baseVolume) * state.voiceMasterVolume;
  }

  function syncAudioControls() {
    ui.bgmVolumeRange.value = String(Math.round(state.bgmMasterVolume * 100));
    ui.voiceVolumeRange.value = String(Math.round(state.voiceMasterVolume * 100));
    ui.bgmVolumeValue.textContent = `${Math.round(state.bgmMasterVolume * 100)}%`;
    ui.voiceVolumeValue.textContent = `${Math.round(state.voiceMasterVolume * 100)}%`;
  }

  function syncLanguageControls() {
    [
      [ui.coverLanguageZhButton, "zh"],
      [ui.coverLanguageEnButton, "en"],
      [ui.languageZhButton, "zh"],
      [ui.languageEnButton, "en"]
    ].forEach(([button, language]) => {
      if (!button) {
        return;
      }

      const isActive = currentLanguage === language;
      button.classList.toggle("is-active", isActive);
      button.disabled = isActive;
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function switchLanguage(language) {
    if (!language || language === currentLanguage) {
      return;
    }

    saveProgress();

    const nextUrl = new URL(window.location.href);

    if (language === "en") {
      nextUrl.searchParams.set("lang", "en");
      nextUrl.searchParams.delete("locale");
    } else {
      nextUrl.searchParams.delete("lang");
      nextUrl.searchParams.delete("locale");
    }

    if (hasStoredProgress() || hasSavedProgress()) {
      nextUrl.searchParams.set("resume", "1");
    } else {
      nextUrl.searchParams.delete("resume");
    }

    window.location.assign(nextUrl.toString());
  }

  function applyAudioMix() {
    bgmAudio.volume = state.muted ? 0 : getEffectiveBgmVolume();
    galleryAudio.volume = state.muted ? 0 : getEffectiveBgmVolume();
    voiceAudio.volume = state.muted ? 0 : getEffectiveVoiceVolume();
  }

  function setVoiceStatus(mode) {
    state.currentVoiceStatus = mode || null;
    if (!mode) {
      ui.voiceStatus.hidden = true;
      ui.voiceStatus.classList.remove("is-loading", "is-playing");
      ui.voiceStatus.textContent = "";
      return;
    }

    ui.voiceStatus.hidden = false;
    ui.voiceStatus.classList.remove("is-loading", "is-playing");

    if (mode === "loading") {
      ui.voiceStatus.classList.add("is-loading");
      ui.voiceStatus.textContent = "Voice Loading";
      return;
    }

    if (mode === "playing") {
      ui.voiceStatus.classList.add("is-playing");
      ui.voiceStatus.textContent = "Voice Playing";
      return;
    }

    if (mode === "missing") {
      ui.voiceStatus.textContent = "Voice Missing";
      return;
    }

    ui.voiceStatus.textContent = "Voice Ready";
  }

  function clearTypingTimer() {
    if (state.typingTimer) {
      window.clearInterval(state.typingTimer);
      state.typingTimer = null;
    }
  }

  function clearAutoTimer() {
    if (state.autoTimer) {
      window.clearTimeout(state.autoTimer);
      state.autoTimer = null;
    }
  }

  function clearPreLineTimer() {
    if (state.preLineTimer) {
      window.clearTimeout(state.preLineTimer);
      state.preLineTimer = null;
    }
    state.pendingLineStarter = null;
  }

  function clearBgmFadeTimer() {
    if (state.bgmFadeTimer) {
      window.clearInterval(state.bgmFadeTimer);
      state.bgmFadeTimer = null;
    }
  }

  function stopVoice() {
    if (!voiceAudio.src) {
      return;
    }
    voiceAudio.pause();
    voiceAudio.currentTime = 0;
  }

  function transitionBgm(src, targetVolume, fadeMs) {
    clearBgmFadeTimer();
    const effectiveTargetVolume = getEffectiveBgmVolume(targetVolume);

    const startNextTrack = () => {
      bgmAudio.src = src;
      bgmAudio.volume = state.muted ? 0 : 0;

      if (state.audioUnlocked && !state.muted) {
        bgmAudio.play().catch(() => {});
      }

      const steps = Math.max(1, Math.round(fadeMs / 50));
      let step = 0;
      state.bgmFadeTimer = window.setInterval(() => {
        step += 1;
        const progress = step / steps;
        bgmAudio.volume = state.muted ? 0 : effectiveTargetVolume * progress;
        if (step >= steps) {
          clearBgmFadeTimer();
          bgmAudio.volume = state.muted ? 0 : effectiveTargetVolume;
        }
      }, 50);
    };

    if (!bgmAudio.src || !state.audioUnlocked || state.muted) {
      startNextTrack();
      return;
    }

    const fromVolume = bgmAudio.volume;
    const steps = Math.max(1, Math.round(fadeMs / 50));
    let step = 0;
    state.bgmFadeTimer = window.setInterval(() => {
      step += 1;
      const progress = step / steps;
      bgmAudio.volume = fromVolume * (1 - progress);
      if (step >= steps) {
        clearBgmFadeTimer();
        bgmAudio.pause();
        startNextTrack();
      }
    }, 50);
  }

  function resetProgress() {
    clearAutoTimer();
    clearTypingTimer();
    clearPreLineTimer();
    clearChapterCardTimer();
    clearCgRevealTimer();
    clearPropTimers();
    clearLineEffects();
    clearBgmFadeTimer();
    stopVoice();
    stopVideoPlayback(false);
    state.index = 0;
    state.backlog = [];
    state.pendingOnDone = null;
    state.deferredLineStarter = null;
    state.awaitingCgRevealTap = false;
    state.cgRevealLocked = false;
    state.chapterCardActive = false;
    state.userTextboxHidden = false;
    state.systemTextboxHidden = false;
      state.unlockedChapters = new Set([chapterMeta[0]?.id].filter(Boolean));
      state.completedChapters = new Set();
      state.seenCgs = new Set();
      state.seenBgms = new Set();
      state.currentRouteStepId = null;
      state.visitedRouteSteps = new Set();
      state.choiceActive = false;
      state.usedChoiceOptions = {};
      state.lastTrapTraces = [];
      window.localStorage.removeItem(storageKey);
      setRoutePanel(false);
      clearChoicePanel();
      setOverlay(ui.settingOverlay, false);
      setOverlay(ui.backlogOverlay, false);
      setOverlay(ui.galleryOverlay, false);
    setOverlay(ui.cgPreviewOverlay, false);
    setOverlay(ui.creditsOverlay, false);
    setOverlay(ui.confirmOverlay, false);
    syncTextboxVisibility();
    renderCurrentLine(true);
    buildChapterMenu();
    syncAudioControls();
    applyAudioMix();
    saveProgress();
  }

  ui.cgLayer.addEventListener("load", () => {
    const width = ui.cgLayer.naturalWidth || 0;
    const height = ui.cgLayer.naturalHeight || 0;

    ui.cgFrame.classList.remove("is-landscape", "is-portrait", "is-square");

    if (!width || !height) {
      return;
    }

    if (width > height * 1.08) {
      ui.cgFrame.classList.add("is-landscape");
      return;
    }

    if (height > width * 1.08) {
      ui.cgFrame.classList.add("is-portrait");
      return;
    }

    ui.cgFrame.classList.add("is-square");
  });

  function preloadVisualAssets() {
    const imageSources = new Set();
    const videoSources = new Set();

    story.lines.forEach((line) => {
      if (line.background) {
        imageSources.add(line.background);
      }
      if (line.cg) {
        imageSources.add(line.cg);
      }
      if (Array.isArray(line.sprites)) {
        line.sprites.forEach((sprite) => {
          if (sprite?.src) {
            imageSources.add(sprite.src);
          }
        });
      }
      const prop = normalizeProp(line.prop);
      if (prop?.src) {
        imageSources.add(prop.src);
      }
      if (line.video) {
        videoSources.add(line.video);
      }
      if (line.poster) {
        imageSources.add(line.poster);
      }
    });

    imageSources.forEach((src) => preloadImage(src));
    videoSources.forEach((src) => preloadVideo(src));
  }

  function preloadImage(src) {
    if (!src) {
      return null;
    }

    if (preloadedImages.has(src)) {
      return preloadedImages.get(src);
    }

    const img = new Image();
    img.decoding = "async";

    const entry = {
      img,
      loaded: false
    };

    img.addEventListener("load", () => {
      entry.loaded = true;
    });

    img.src = src;
    preloadedImages.set(src, entry);
    return entry;
  }

  function preloadVideo(src) {
    if (!src) {
      return null;
    }

    if (preloadedVideos.has(src)) {
      return preloadedVideos.get(src);
    }

    const video = document.createElement("video");
    video.preload = "metadata";
    video.src = src;

    const entry = {
      video
    };

    preloadedVideos.set(src, entry);
    return entry;
  }

  function preloadVoice(src) {
    if (!src) {
      return null;
    }

    if (preloadedVoices.has(src)) {
      return preloadedVoices.get(src);
    }

    const audio = new Audio();
    const entry = { audio, status: "loading" };
    audio.preload = "auto";
    audio.addEventListener(
      "canplaythrough",
      () => {
        entry.status = "loaded";
      },
      { once: true }
    );
    audio.addEventListener(
      "loadeddata",
      () => {
        if (entry.status !== "error") {
          entry.status = "loaded";
        }
      },
      { once: true }
    );
    audio.addEventListener(
      "error",
      () => {
        entry.status = "error";
      },
      { once: true }
    );
    audio.src = src;
    audio.load();
    preloadedVoices.set(src, entry);
    return entry;
  }

  function preloadChapterVoices(chapterId) {
    const chapter = chapterMetaById[chapterId];
    if (!chapter) {
      return;
    }

    for (let i = chapter.startIndex; i <= chapter.endIndex; i += 1) {
      const line = story.lines[i];
      if (line?.voice) {
        preloadVoice(line.voice);
      }
    }
  }

  function setImageSourceWhenReady(target, src, onReady) {
    const entry = preloadImage(src);
    if (!entry) {
      return;
    }

    const reveal = () => {
      if (target.dataset.assetSrc !== src) {
        return;
      }
      target.onload = null;
      onReady();
    };

    target.dataset.assetSrc = src;
    target.classList.remove("is-visible", "is-dim");

    if (entry.loaded || (entry.img.complete && entry.img.naturalWidth > 0)) {
      target.src = src;
      reveal();
      return;
    }

    target.onload = reveal;
    target.src = src;
  }

  function hydrateProgressState() {
    const raw = window.localStorage.getItem(storageKey);

    if (!raw) {
      unlockChapter(chapterMeta[0]?.id);
      return;
    }

    try {
      const parsed = JSON.parse(raw);
      if (typeof parsed.index === "number") {
        state.index = clampIndex(parsed.index);
      } else {
        state.index = 0;
      }

      if (Array.isArray(parsed.unlockedChapters)) {
        parsed.unlockedChapters.forEach((id) => unlockChapter(id));
      }

        if (Array.isArray(parsed.completedChapters)) {
          parsed.completedChapters.forEach((id) => {
            if (chapterMetaById[id]) {
              state.completedChapters.add(id);
            }
          });
        }

        if (Array.isArray(parsed.visitedRouteSteps)) {
          parsed.visitedRouteSteps.forEach((id) => {
            if (routeStepIds.has(id)) {
              state.visitedRouteSteps.add(id);
            }
          });
        }

        if (parsed.usedChoiceOptions && typeof parsed.usedChoiceOptions === "object") {
          state.usedChoiceOptions = Object.fromEntries(
            Object.entries(parsed.usedChoiceOptions).map(([choiceId, optionIds]) => [
              choiceId,
              Array.isArray(optionIds) ? optionIds.filter((id) => typeof id === "string" && id) : []
            ])
          );
        }

        if (Array.isArray(parsed.lastTrapTraces)) {
          state.lastTrapTraces = parsed.lastTrapTraces.filter((value) => typeof value === "string" && value.trim());
        } else if (typeof parsed.lastTrapTrace === "string" && parsed.lastTrapTrace.trim()) {
          state.lastTrapTraces = [parsed.lastTrapTrace.trim()];
        }

      if (Array.isArray(parsed.seenCgs)) {
        parsed.seenCgs.forEach((src) => {
          if (typeof src === "string" && src) {
            state.seenCgs.add(src);
          }
        });
      }

      if (Array.isArray(parsed.seenBgms)) {
        parsed.seenBgms.forEach((src) => {
          if (typeof src === "string" && src) {
            state.seenBgms.add(src);
          }
        });
      }

      if (typeof parsed.bgmMasterVolume === "number") {
        state.bgmMasterVolume = clampVolume(parsed.bgmMasterVolume);
      }

      if (typeof parsed.voiceMasterVolume === "number") {
        state.voiceMasterVolume = clampVolume(parsed.voiceMasterVolume);
      }
    } catch (error) {
      const parsedNumber = Number.parseInt(raw, 10);
      state.index = Number.isNaN(parsedNumber) ? 0 : clampIndex(parsedNumber);
    }

    if (!state.unlockedChapters.size) {
      unlockChapter(chapterMeta[0]?.id);
    }

    unlockChaptersUpToIndex(state.index);
  }

  function unlockChapter(chapterId) {
    if (!chapterId || !chapterMetaById[chapterId]) {
      return;
    }
    state.unlockedChapters.add(chapterId);
  }

  function markChapterComplete(chapterId) {
    if (!chapterId || !chapterMetaById[chapterId]) {
      return;
    }
    state.completedChapters.add(chapterId);
    const nextOrder = chapterMetaById[chapterId].order + 1;
    const nextChapter = chapterMeta[nextOrder];
    if (nextChapter) {
      unlockChapter(nextChapter.id);
    }
  }

  function unlockChaptersUpToIndex(index) {
    chapterMeta.forEach((chapter) => {
      if (index >= chapter.startIndex) {
        unlockChapter(chapter.id);
      }
      if (index > chapter.endIndex) {
        state.completedChapters.add(chapter.id);
      }
    });
  }

  function clampIndex(index) {
    return Math.min(Math.max(index, 0), story.lines.length - 1);
  }

  function clearChapterCardTimer() {
    if (state.chapterCardTimer) {
      window.clearTimeout(state.chapterCardTimer);
      state.chapterCardTimer = null;
    }
    if (state.sceneGateTimer) {
      window.clearTimeout(state.sceneGateTimer);
      state.sceneGateTimer = null;
    }
    state.chapterCardActive = false;
    ui.chapterCard.classList.remove("is-visible", "is-cinematic");
  }

  function clearCgRevealTimer() {
    if (state.cgRevealTimer) {
      window.clearTimeout(state.cgRevealTimer);
      state.cgRevealTimer = null;
    }
    state.cgRevealLocked = false;
    state.awaitingCgRevealTap = false;
    state.deferredLineStarter = null;
  }

  function clearPropTimers() {
    if (state.propDisplayTimer) {
      window.clearTimeout(state.propDisplayTimer);
      state.propDisplayTimer = null;
    }
    if (state.propHideTimer) {
      window.clearTimeout(state.propHideTimer);
      state.propHideTimer = null;
    }
    state.propLockedUntil = 0;
  }

  function getRemainingPropLockMs() {
    return Math.max(0, state.propLockedUntil - Date.now());
  }

  function shouldTriggerFirstCgReveal(cgSrc) {
    return Boolean(cgSrc) && !state.seenCgs.has(cgSrc);
  }

  function markCgAsSeen(cgSrc) {
    if (!cgSrc) {
      return;
    }
    state.seenCgs.add(cgSrc);
    saveProgress();
  }

  function markBgmAsSeen(bgmSrc) {
    if (!bgmSrc || state.seenBgms.has(bgmSrc)) {
      return;
    }
    state.seenBgms.add(bgmSrc);
    saveProgress();
  }

  function resumeDeferredSceneIfReady() {
    if (!state.awaitingCgRevealTap || !state.deferredLineStarter) {
      return false;
    }

    const starter = state.deferredLineStarter;
    state.deferredLineStarter = null;
    state.awaitingCgRevealTap = false;
    setSystemTextboxHidden(false);
    starter();
    return true;
  }

  function resumeAfterLanguageSwitchIfNeeded() {
    if (!shouldResumeAfterLanguageSwitch || !(hasStoredProgress() || hasSavedProgress())) {
      return;
    }

    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.delete("resume");

    if (window.history && typeof window.history.replaceState === "function") {
      window.history.replaceState({}, "", nextUrl.toString());
    }

    state.coverActive = false;
    setOverlay(ui.coverOverlay, false);
    renderCurrentLine(false);
  }

  function autoStartIfNeeded() {
    if (!shouldAutoStartEntry || hasStoredProgress() || hasSavedProgress()) {
      return;
    }

    const nextUrl = new URL(window.location.href);
    nextUrl.searchParams.delete("autostart");

    if (window.history && typeof window.history.replaceState === "function") {
      window.history.replaceState({}, "", nextUrl.toString());
    }

    state.coverActive = false;
    setOverlay(ui.coverOverlay, false);
    resetProgress();
  }

  function openCover() {
    clearAutoTimer();
    clearLineEffects();
    clearChoicePanel();
    stopVideoPlayback(false);
    state.coverActive = true;
    setRoutePanel(false);
    preloadChapterVoices(story.lines[state.index]?.chapterId);
    renderCoverResidualMark();
    setOverlay(ui.coverOverlay, true);
    ui.coverContinueButton.hidden = !hasSavedProgress();
  }

  function renderCoverResidualMark() {
    if (!ui.coverResidualMark) {
      return;
    }
    const traces = Array.isArray(state.lastTrapTraces) ? state.lastTrapTraces.filter((value) => typeof value === "string" && value.trim()) : [];
    ui.coverResidualMark.hidden = !traces.length;
    ui.coverResidualMark.innerHTML = "";
    traces.forEach((trace) => {
      const line = document.createElement("p");
      line.className = "cover-residual-mark";
      line.textContent = trace;
      ui.coverResidualMark.appendChild(line);
    });
  }

  function returnToTitle() {
    clearAutoTimer();
    clearChoicePanel();
    stopVideoPlayback(false);
    setOverlay(ui.settingOverlay, false);
    setOverlay(ui.backlogOverlay, false);
    setOverlay(ui.galleryOverlay, false);
    setOverlay(ui.cgPreviewOverlay, false);
    setOverlay(ui.creditsOverlay, false);
    setOverlay(ui.confirmOverlay, false);
    openCover();
  }

  function hasSavedProgress() {
    return state.index > 0 || state.completedChapters.size > 0 || state.unlockedChapters.size > 1;
  }

  function renderGallery() {
    renderGalleryCgs();
    renderGalleryBgms();
  }

  function setGalleryTab(mode) {
    const showCg = mode !== "bgm";
    ui.gallerySectionCg.hidden = !showCg;
    ui.gallerySectionBgm.hidden = showCg;
    ui.galleryTabCg.classList.toggle("is-active", showCg);
    ui.galleryTabBgm.classList.toggle("is-active", !showCg);
    ui.galleryTabCg.setAttribute("aria-selected", showCg ? "true" : "false");
    ui.galleryTabBgm.setAttribute("aria-selected", showCg ? "false" : "true");
  }

  function renderGalleryCgs() {
    ui.galleryCgList.innerHTML = "";
    const fragment = document.createDocumentFragment();

    galleryCgs.forEach((item) => {
      const unlocked = state.seenCgs.has(item.src);
      const card = document.createElement("article");
      card.className = `gallery-cg-item${unlocked ? "" : " is-locked"}`;
      if (unlocked) {
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", `Open CG: ${item.label}`);
      }

      const image = document.createElement("img");
      image.alt = unlocked ? item.label : "Locked CG";
      image.src = item.src;
      image.loading = "lazy";
      image.draggable = false;

      const title = document.createElement("h3");
      title.textContent = unlocked ? item.label : "Locked";

      const chapter = document.createElement("p");
      chapter.textContent = unlocked ? item.chapter : "Read further to unlock this CG.";

      card.appendChild(image);
      card.appendChild(title);
      card.appendChild(chapter);
      if (unlocked) {
        card.addEventListener("click", () => {
          playUiClick();
          openCgPreview(item);
        });
        card.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            playUiClick();
            openCgPreview(item);
          }
        });
      }
      fragment.appendChild(card);
    });

    ui.galleryCgList.appendChild(fragment);
  }

  function renderGalleryBgms() {
    ui.galleryBgmList.innerHTML = "";
    const fragment = document.createDocumentFragment();

    galleryBgms.forEach((item) => {
      const unlocked = state.seenBgms.has(item.src);
      const row = document.createElement("article");
      row.className = `gallery-bgm-item${unlocked ? "" : " is-locked"}`;

      const copy = document.createElement("div");
      copy.className = "gallery-bgm-copy";

      const title = document.createElement("h3");
      title.textContent = unlocked ? item.label : "Locked";

      const chapter = document.createElement("p");
      chapter.textContent = unlocked ? item.chapter : "Read further to unlock this BGM.";

      copy.appendChild(title);
      copy.appendChild(chapter);

      const actions = document.createElement("div");
      actions.className = "gallery-bgm-actions";

      const playButton = document.createElement("button");
      playButton.type = "button";
      playButton.className = "gallery-bgm-button";
      playButton.textContent = "Play";
      playButton.disabled = !unlocked;
      playButton.addEventListener("click", (event) => {
        event.stopPropagation();
        unlockAudio();
        playUiClick();
        playGalleryBgm(item.src);
      });

      const stopButton = document.createElement("button");
      stopButton.type = "button";
      stopButton.className = "gallery-bgm-button";
      stopButton.textContent = "Stop";
      stopButton.disabled = !unlocked;
      stopButton.addEventListener("click", (event) => {
        event.stopPropagation();
        playUiClick();
        stopGalleryBgm(true);
      });

      actions.appendChild(playButton);
      actions.appendChild(stopButton);
      row.appendChild(copy);
      row.appendChild(actions);
      fragment.appendChild(row);
    });

    ui.galleryBgmList.appendChild(fragment);
  }

  function playGalleryBgm(src) {
    if (!src) {
      return;
    }

    state.currentGalleryBgmSrc = src;
    galleryAudio.src = src;
    galleryAudio.volume = state.muted ? 0 : getEffectiveBgmVolume();
    bgmAudio.pause();
    galleryAudio.play().catch(() => {});
  }

  function stopGalleryBgm(restoreStoryBgm) {
    if (galleryAudio.src) {
      galleryAudio.pause();
      galleryAudio.currentTime = 0;
    }
    state.currentGalleryBgmSrc = null;

    if (restoreStoryBgm && state.audioUnlocked && !state.muted && state.currentBgmSrc) {
      bgmAudio.volume = getEffectiveBgmVolume();
      bgmAudio.play().catch(() => {});
    }
  }

  function collectUniqueCgs() {
    const seen = new Set();
    const list = [];

    story.lines.forEach((line) => {
      if (!line.cg || seen.has(line.cg)) {
        return;
      }
      seen.add(line.cg);
      const chapter = story.chapters.find((item) => item.id === line.chapterId);
      list.push({
        src: line.cg,
        label: humanizeAssetName(line.cg),
        chapter: chapter?.title || line.chapterId
      });
    });

    return list;
  }

  function collectUniqueBgms() {
    const seen = new Set();
    const list = [];

    story.lines.forEach((line) => {
      if (!line.bgm || seen.has(line.bgm)) {
        return;
      }
      seen.add(line.bgm);
      const chapter = story.chapters.find((item) => item.id === line.chapterId);
      list.push({
        src: line.bgm,
        label: line.bgmName || humanizeAssetName(line.bgm),
        chapter: chapter?.title || line.chapterId
      });
    });

    return list;
  }

  function humanizeAssetName(src) {
    const fileName = src.split("/").pop() || src;
    return fileName
      .replace(/\.[^.]+$/, "")
      .replace(/^cg_|^bgm_/, "")
      .replace(/[_-]+/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  function normalizeProp(propDef, chapter) {
    if (!propDef) {
      return null;
    }

    if (typeof propDef === "string") {
      return {
        src: propDef,
        title: humanizeAssetName(propDef),
        caption: chapter?.title || "Story Item",
        chapter: chapter?.title || "Story Item"
      };
    }

    if (!propDef.src) {
      return null;
    }

    return {
      src: propDef.src,
      title: propDef.title || humanizeAssetName(propDef.src),
      caption: propDef.caption || "",
      chapter: propDef.chapter || chapter?.title || "Story Item"
    };
  }

  function openCgPreview(item) {
    ui.cgPreviewTitle.textContent = item.label;
    ui.cgPreviewChapter.textContent = item.chapter;
    ui.cgPreviewImage.src = item.src;
    ui.cgPreviewImage.alt = item.label;
    setOverlay(ui.cgPreviewOverlay, true);
  }

})();
