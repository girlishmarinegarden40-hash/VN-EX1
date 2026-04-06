(function () {
  const chapters = {
    "afteralice-step-outside": {
      title: "Chapter 01",
      subtitle: "Let's Go Out",
      location: "The Garden After Alice"
    },
    "afteralice-blank-platform": {
      title: "Chapter 02",
      subtitle: "Blank Platform",
      location: "The Edge Station"
    },
    "afteralice-unseen-companion": {
      title: "Chapter 03",
      subtitle: "The Unseen Companion",
      location: "Deep in the Blank Platform"
    },
    "afteralice-unnamed-domain": {
      title: "Chapter 04",
      subtitle: "Unnamed Domain",
      location: "The Nameless Corridor"
    },
    "afteralice-false-reboot": {
      title: "Chapter 05",
      subtitle: "False Reboot",
      location: "The Triple Convergence Space"
    },
    "afteralice-do-not-complete": {
      title: "Chapter 06",
      subtitle: "Not Every Blank Needs to Be Filled",
      location: "Layer Three and the World Choice Layer"
    },
    "afteralice-go-out-after-waking": {
      title: "Chapter 07",
      subtitle: "The Sea Will Remember Them",
      location: "The Shore and the Garden"
    }
  };

  const lines = {};

  function lineId(chapterId, number) {
    return `${chapterId}::${number}`;
  }

  function setLine(chapterId, number, fields) {
    const id = lineId(chapterId, number);
    lines[id] = {
      ...(lines[id] || {}),
      ...fields
    };
  }

  function setRange(chapterId, start, end, fields) {
    for (let number = start; number <= end; number += 1) {
      setLine(chapterId, number, fields);
    }
  }

  // ─────────────────────────────────────────────
  // Chapter 01 – afteralice-step-outside
  // ─────────────────────────────────────────────
  setLine("afteralice-step-outside", 1, {
    eyebrow: "After Alice | Side Story",
    title: "Let's Go Out",
    subtitle: "Some futures are not opened by commands. They open when someone quietly writes a single line.",
    location: "The Garden After Alice"
  });
  setRange("afteralice-step-outside", 2, 79, { location: "The Garden After Alice" });
  setRange("afteralice-step-outside", 2, 79, { speaker: "Narration" });
  setLine("afteralice-step-outside", 5, { speaker: "Moel" });
  setLine("afteralice-step-outside", 9, { speaker: "Moel" });
  setLine("afteralice-step-outside", 11, { speaker: "Noa" });
  setLine("afteralice-step-outside", 13, { speaker: "Hana" });
  setLine("afteralice-step-outside", 14, { speaker: "Yume" });
  setLine("afteralice-step-outside", 15, { speaker: "Moel" });
  setLine("afteralice-step-outside", 16, { speaker: "Noa" });
  setLine("afteralice-step-outside", 18, { speaker: "Noa" });
  setLine("afteralice-step-outside", 20, { speaker: "Hana" });
  setLine("afteralice-step-outside", 21, { speaker: "Alice" });
  setLine("afteralice-step-outside", 24, { speaker: "Noa" });
  setLine("afteralice-step-outside", 27, { speaker: "Moel" });
  setLine("afteralice-step-outside", 29, { speaker: "Hana" });
  setLine("afteralice-step-outside", 32, { speaker: "Yume" });
  setLine("afteralice-step-outside", 34, { speaker: "Alice" });
  setLine("afteralice-step-outside", 35, { speaker: "Alice" });
  setLine("afteralice-step-outside", 37, { speaker: "Noa" });
  setLine("afteralice-step-outside", 38, { speaker: "Noa" });
  setLine("afteralice-step-outside", 39, { speaker: "Yume" });
  setLine("afteralice-step-outside", 40, { speaker: "Hana" });
  setLine("afteralice-step-outside", 41, { speaker: "Alice" });
  setLine("afteralice-step-outside", 43, { speaker: "Moel" });
  setLine("afteralice-step-outside", 44, { speaker: "Moel" });
  setLine("afteralice-step-outside", 46, { speaker: "Hana" });
  setLine("afteralice-step-outside", 48, { speaker: "Noa" });
  setLine("afteralice-step-outside", 50, { speaker: "Moel" });
  setLine("afteralice-step-outside", 52, { speaker: "Hana" });
  setLine("afteralice-step-outside", 53, { speaker: "Moel" });
  setLine("afteralice-step-outside", 56, { speaker: "Noa" });
  setLine("afteralice-step-outside", 57, { speaker: "Moel" });
  setLine("afteralice-step-outside", 59, { speaker: "Moel" });
  setLine("afteralice-step-outside", 62, { speaker: "Hana" });
  setLine("afteralice-step-outside", 63, { speaker: "Moel" });
  setLine("afteralice-step-outside", 66, { speaker: "Moel" });
  setLine("afteralice-step-outside", 70, { speaker: "Moel" });
  setLine("afteralice-step-outside", 71, { speaker: "Hana" });
  setLine("afteralice-step-outside", 72, { speaker: "Moel" });
  setLine("afteralice-step-outside", 73, { speaker: "Yume" });
  setLine("afteralice-step-outside", 74, { speaker: "Moel" });
  setLine("afteralice-step-outside", 75, { speaker: "Yume" });
  setLine("afteralice-step-outside", 76, { speaker: "Alice" });
  setLine("afteralice-step-outside", 77, { speaker: "Noa" });
  setLine("afteralice-step-outside", 78, { speaker: "Moel" });

  setLine("afteralice-step-outside", 2, {
    text: "After Alice, the garden grew quiet. Not desolate, not the hollow silence that follows an ending. More like a place that had finally been released from carrying everyone else's conclusions — and not yet knowing how to make an 'afterward' into ordinary days, it left the wind, the water, the benches, and the colonnades exactly where they were, and simply kept breathing."
  });
  setLine("afteralice-step-outside", 3, {
    text: "Noa sat at her familiar spot by the fountain, a still-new blank journal open across her knees. The aquarium flyer was tucked at the very front, its corners worn soft from handling. Sometimes she would look at it first, then turn to the empty pages behind. Not because she hadn't learned to move forward — but because she was coming to understand: moving forward doesn't mean you have to fill everything in at once."
  });
  setLine("afteralice-step-outside", 4, {
    text: "Moel was sprawled on the other end of the bench, like a black cat that could fall asleep at any moment. She looked more unburdened than anyone, as though she could always sense one beat earlier which way the wind would turn — yet it was precisely because she was always drifting near the edge that she sometimes took a wrong step before anyone else."
  });
  setLine("afteralice-step-outside", 5, {
    text: "You're going to stare a hole right through that paper."
  });
  setLine("afteralice-step-outside", 6, {
    text: "She said it lightly — not as a nudge for Noa to do something, more like she'd caught her staring at the flyer a beat too long and simply poked at the 'want to go' Noa hadn't quite admitted yet. Which was exactly why Noa went quieter rather than answering. She wasn't waiting for someone else to start the trip. She was asking herself whether she had the right to write one sentence into reality — a sentence that would be seen by the world — on behalf of an 'afterward' she had yet to deserve."
  });
  setLine("afteralice-step-outside", 7, {
    text: "There was something else she was turning over, quieter still and harder to admit. The three sisters were no longer the kind of presences that stood steadily in the garden forever. If she invited them all to the sea, would it be like borrowing people who had already become free — pulling them back to her side for a while? That hesitation wasn't retreat. It made Noa more careful in her awareness: whatever she wrote next could not be possession. It could only be an invitation."
  });
  setLine("afteralice-step-outside", 8, {
    text: "Noa pressed her fingertip gently along the old crease at the edge of the flyer, flattening it a little. She suddenly remembered: she had kept this paper all this way because someone had once left a very thin thread pointing toward a place they wanted to go. The small shyness of 'would this be too selfish' settled, with that memory, into a quieter and more serious feeling."
  });
  setLine("afteralice-step-outside", 9, {
    text: "It's fine to think as long as you need. Just don't keep giving your 'want to' to your 'should'."
  });
  setLine("afteralice-step-outside", 10, {
    text: "Noa didn't answer right away. She looked at the flyer, then turned to the blank pages of the journal. She wasn't deciding whether or not to go out — she was wondering if leaving the garden could also be something that didn't have to be called a heavy, important decision. But once the word 'sea' surfaced in her mind, it was like a wish that had been gently swaying behind the pages finally walked on its own to the tip of the pen."
  });
  setLine("afteralice-step-outside", 11, {
    text: "...Would there be an aquarium here?"
  });
  setLine("afteralice-step-outside", 12, {
    text: "She wasn't really asking anyone. It was more like she had quietly said aloud the place in the flyer that had never been visited."
  });
  setLine("afteralice-step-outside", 13, {
    text: "Probably... not?"
  });
  setLine("afteralice-step-outside", 14, {
    text: "No such facility has been observed in the current environment."
  });
  setLine("afteralice-step-outside", 15, {
    text: "Unless someone specifically generates one. ...Though those things are usually in water, I suppose."
  });
  setLine("afteralice-step-outside", 16, {
    text: "In water?"
  });
  setLine("afteralice-step-outside", 17, {
    text: "Moel gestured vaguely, the motion not very precise — as if she were showing Noa what 'transparent, drifting things' roughly looked like, going on memory alone."
  });
  setLine("afteralice-step-outside", 18, {
    text: "Then... where is the water?"
  });
  setLine("afteralice-step-outside", 19, {
    text: "No one answered right away. The wind happened to pass through, and the ripples in the fountain caught the light more visibly than usual for a moment."
  });
  setLine("afteralice-step-outside", 20, {
    text: "In the sea... there should be some there?"
  });
  setLine("afteralice-step-outside", 21, {
    text: "The sea is a possible state."
  });
  setLine("afteralice-step-outside", 22, {
    text: "No one took that line. Noa simply lowered her head again. She suddenly understood: what she wanted to write was perhaps not 'the aquarium' itself, but the kind of afterward where you could walk somewhere with water. And so the word 'sea' stopped feeling out of place."
  });
  setLine("afteralice-step-outside", 23, {
    text: "She picked up her pen and wrote something that felt nothing like activating an ability, nothing like making a wish. More like placing a very natural feeling, gently, into the real."
  });
  setLine("afteralice-step-outside", 24, {
    text: "I want us to go to the sea together."
  });
  setLine("afteralice-step-outside", 25, {
    text: "When the ink settled, the first thing that changed was not the light — it was the wind. A very light breath, as if it had come from somewhere far away and was trying to touch this place first. Then, from the far end of the colonnade, came a faint sound that did not belong to the garden. Thin enough to be almost an illusion — yet already enough to let a suspended future begin to be briefly acknowledged by the world."
  });
  setLine("afteralice-step-outside", 26, {
    text: "The surface of the fountain shivered once, very gently. Not as if someone were stepping out of it — but as if the written sentence had at last fallen into something reflective, and even the water had chosen to remember it first. In that instant, Noa felt a flicker of something like fear. For the first time she felt, clearly, that she was not just writing to paper — she was writing others into this sentence, into this future, as well."
  });
  setLine("afteralice-step-outside", 27, {
    text: "...You really do know how to make things complicated for me."
  });
  setLine("afteralice-step-outside", 28, {
    text: "At the far end of the colonnade, the first thing to brighten was a pale shade of orange. As if someone had carried warmth back here first. Hana took shape along that unclose'd fragment, like she had borrowed a quiet body from the wind."
  });
  setLine("afteralice-step-outside", 29, {
    text: "The sea?"
  });
  setLine("afteralice-step-outside", 30, {
    text: "Noa watched them appear one by one along the journal's sentence. For the first time she understood it with complete clarity: this was not a summoning, and not a miracle. It was only a fragment that the world had not fully closed — and after she wrote 'I want to,' it had been temporarily permitted to happen. She had not created them. She had only given this moment an entrance that the real world would recognize."
  });
  setLine("afteralice-step-outside", 31, {
    text: "Yume appeared next. She glanced at the blank pages in her hands — no number written at the margin — and they lifted very lightly, as if a path that had no natural extension in the garden was approaching now against the wind."
  });
  setLine("afteralice-step-outside", 32, {
    text: "This is not a path the garden would naturally extend."
  });
  setLine("afteralice-step-outside", 33, {
    text: "Alice appeared last. When she did, the sound of the tide grew slightly clearer. As if the sentence, once truly seen, had allowed a fragment that had been waiting just outside the boundary to begin drawing seriously toward here."
  });
  setLine("afteralice-step-outside", 34, {
    text: "This is an unclosed fragment."
  });
  setLine("afteralice-step-outside", 35, {
    text: "This is not an ending. Only the starting point, at last written out."
  });
  setLine("afteralice-step-outside", 36, {
    text: "Then Noa saw clearly: they had not simply returned to their places as before. Where the light passed through the edges of their clothing, each of them was a little lighter than usual — as if they had borrowed, from wherever they now existed, a shape that could walk alongside her for a while. And that was precisely what made this walk together more precious."
  });
  setLine("afteralice-step-outside", 37, {
    text: "Is this too selfish of me?"
  });
  setLine("afteralice-step-outside", 38, {
    text: "I only wanted to go to the sea with you all... and the world actually caught it."
  });
  setLine("afteralice-step-outside", 39, {
    text: "If this sentence were only an empty wish, it would not have opened into a path."
  });
  setLine("afteralice-step-outside", 40, {
    text: "And it's only the sea. Wanting a little bit of an afterward like this now and then — that's not too much to ask."
  });
  setLine("afteralice-step-outside", 41, {
    text: "What gets recognized doesn't have to be only 'necessary.' It can also be 'wanted.'"
  });
  setLine("afteralice-step-outside", 42, {
    text: "Only then did Noa truly understand: what she had written was not 'how things would certainly be.' She had only given a future an anchor point — a mark that the world would briefly see. Whether it would unfold in full still depended on them walking into it themselves."
  });
  setLine("afteralice-step-outside", 43, {
    text: "It's already written. Then let's go."
  });
  setLine("afteralice-step-outside", 44, {
    text: "Just so we're clear — I'm only walking with you for part of it."
  });
  setLine("afteralice-step-outside", 45, {
    text: "They walked together toward the small path that had grown into being. One moment it was like the garden's colonnades; the next, like damp stone left after a tide retreated; the next, simply a whiteness held open by wind. Noa walked in the middle, feeling for the first time that 'the future' was not a word hanging far away in a book, but the gently shifting ground beneath her feet."
  });
  setLine("afteralice-step-outside", 46, {
    text: "There really is a sound of the sea."
  });
  setLine("afteralice-step-outside", 47, {
    text: "No one walked too fast. As if everyone knew this fragment was not a reward — it was something they were walking, step by step, from 'maybe possible' into 'actually happening.' When Noa heard the tide drawing closer, she went quieter than before. She wasn't afraid of failing. She was, for the first time, genuinely taking in: a single 'I want to' really can bring others into it with you."
  });
  setLine("afteralice-step-outside", 48, {
    text: "...Have you ever been to the sea?"
  });
  setLine("afteralice-step-outside", 49, {
    text: "She was looking at Moel when she asked. The cat-like person paused, as if in a very short moment she had taken a question she hadn't meant to answer seriously and held it briefly under her nose."
  });
  setLine("afteralice-step-outside", 50, {
    text: "Of course."
  });
  setLine("afteralice-step-outside", 51, {
    text: "She said it so naturally — as if it didn't even deserve questioning. Her tail flicked behind her with a certain easy confidence, almost self-evident."
  });
  setLine("afteralice-step-outside", 52, {
    text: "Eh? Really?"
  });
  setLine("afteralice-step-outside", 53, {
    text: "The sea is a simple thing. First the humidity in the air rises, then there's salt on the wind, and the direction of the breeze gradually steadies."
  });
  setLine("afteralice-step-outside", 54, {
    text: "The grass along this path was uniform. Not pruned-uniform — the kind of uniform that comes from repetition so simple there's almost no individual variation. Noa knew what that meant, but still hoped she was wrong."
  });
  setLine("afteralice-step-outside", 55, {
    text: "The sky was the same. Too even. Not the evenness of good weather — the evenness of something undecided. The clouds didn't move. The light didn't shift. That shade of blue had none of the layering particular to any single time of day."
  });
  setLine("afteralice-step-outside", 56, {
    text: "This path — it's like someone wrote it into the shape of 'a path' before we arrived."
  });
  setLine("afteralice-step-outside", 57, {
    text: "Like many, many people pressed what they each wanted as a border here, layer by layer. That's why it resembles a path. But not a place that was ever truly prepared for anyone."
  });
  setLine("afteralice-step-outside", 58, {
    text: "She stepped forward two paces, as if confirming the most ordinary common knowledge on everyone's behalf, then raised one hand and pointed — decisive, as if she had already smelled the destination."
  });
  setLine("afteralice-step-outside", 59, {
    text: "So — it's this way."
  });
  setLine("afteralice-step-outside", 60, {
    text: "She turned in a direction. Noa didn't doubt her. Hana even laughed. Yume said nothing, as if she had silently filed away that 'of course.' Alice only glanced in that direction and offered no evaluation."
  });
  setLine("afteralice-step-outside", 61, {
    text: "At first, everything was right. The air truly was a little more humid than before, the stones along the path felt touched by the tide, and there was even a small shell half-buried in a crack. Hana let out a quiet 'oh,' and even Noa nearly believed that Moel truly did know the sea better than anyone."
  });
  setLine("afteralice-step-outside", 62, {
    text: "It really is..."
  });
  setLine("afteralice-step-outside", 63, {
    text: "Told you."
  });
  setLine("afteralice-step-outside", 64, {
    text: "Her tail lifted a little higher, her tone steady and almost victorious. But a little further on, the air suddenly stopped feeling like the sea. Not that the salt had disappeared — it was too empty. The wind no longer moved forward, only drifted in a directionless loop."
  });
  setLine("afteralice-step-outside", 65, {
    text: "Moel's steps slowed. She didn't stop — she took another step forward. The angle of the ground shifted imperceptibly, as if the path that had been following the sound of the tide had been quietly rewritten deeper in, bending in a different direction."
  });
  setLine("afteralice-step-outside", 66, {
    text: "Keep going."
  });
  setLine("afteralice-step-outside", 67, {
    text: "Two more steps, and the path suddenly widened. A little further — and a platform appeared. Empty, nameless, no train, and no sea. Hana stopped first, and Noa stopped too. Yume stood quietly. Alice did not move. Only Moel remained at the very front, as if she had just that moment realized she had led everyone to the completely wrong place."
  });
  setLine("afteralice-step-outside", 68, {
    text: "The outlines of the three of them became sharper. Not fixed — more real. Hana's coat took on the weight of its fabric, and her feet seemed to finally have ground beneath them. Something quietly deliberate appeared in Alice's expression. And in Yume's silence too, as if she had silently acknowledged much that she hadn't yet said aloud."
  });
  setLine("afteralice-step-outside", 69, {
    text: "She paused for two seconds. A faint sweat began to bead at her forehead, and her tail stiffened slightly. The cat-like ease that always made every boundary look simple cracked — just a small and very clear crack — in front of Noa for the first time."
  });
  setLine("afteralice-step-outside", 70, {
    text: "...Mm. We're here."
  });
  setLine("afteralice-step-outside", 71, {
    text: "Is this the sea?"
  });
  setLine("afteralice-step-outside", 72, {
    text: "...It should be."
  });
  setLine("afteralice-step-outside", 73, {
    text: "Noted: 'should be.'"
  });
  setLine("afteralice-step-outside", 74, {
    text: "...Wait, this section wasn't this long a moment ago."
  });
  setLine("afteralice-step-outside", 75, {
    text: "No. This fragment is not extending toward the sea. It's drifting somewhere else."
  });
  setLine("afteralice-step-outside", 76, {
    text: "The boundary didn't hold it."
  });
  setLine("afteralice-step-outside", 77, {
    text: "Then if it drifts somewhere else... are we still walking the same future sentence?"
  });
  setLine("afteralice-step-outside", 78, {
    text: "Probably... still, I think. An anchor point isn't a map. I thought the sea should be this way — turns out I took a wrong step first. As for where the path drifts in between, we can only keep walking and find out."
  });
  setLine("afteralice-step-outside", 79, {
    text: "The next instant, the layer of light beneath their feet — thin as water — turned gently sideways. The future fragment that should have led to the sea slipped out of the shape of 'go see the sea' and angled away. Hana's voice, the sound of Yume turning a page, the faint pause just before Alice made a judgment — along with the journal in Noa's hands — were all pushed by the same displaced white wind toward a place that had not yet been named to completion."
  });

  // ─────────────────────────────────────────────
  // Chapter 02 – afteralice-blank-platform
  // ─────────────────────────────────────────────
  setLine("afteralice-blank-platform", 1, {
    eyebrow: "After Alice | Side Story",
    title: "Blank Platform",
    subtitle: "Like reality, but not yet fully claimed by it.",
    location: "The Edge Station"
  });
  setRange("afteralice-blank-platform", 2, 44, { speaker: "Narration" });
  setLine("afteralice-blank-platform", 3, { speaker: "Hana" });
  setLine("afteralice-blank-platform", 4, { speaker: "Moel" });
  setLine("afteralice-blank-platform", 6, { speaker: "Yume" });
  setLine("afteralice-blank-platform", 7, { speaker: "Alice" });
  setLine("afteralice-blank-platform", 9, { speaker: "Noa" });
  setLine("afteralice-blank-platform", 10, { speaker: "Moel" });
  setLine("afteralice-blank-platform", 12, { speaker: "Hana" });
  setLine("afteralice-blank-platform", 13, { speaker: "Yume" });
  setLine("afteralice-blank-platform", 14, { speaker: "Moel" });
  setLine("afteralice-blank-platform", 15, { speaker: "Hana" });
  setLine("afteralice-blank-platform", 16, { speaker: "Moel" });
  setLine("afteralice-blank-platform", 18, { speaker: "Hana" });
  setLine("afteralice-blank-platform", 19, { speaker: "Yume" });
  setLine("afteralice-blank-platform", 20, { speaker: "Alice" });
  setLine("afteralice-blank-platform", 23, { speaker: "Hana" });
  setLine("afteralice-blank-platform", 26, { speaker: "Unnamed Girl" });
  setLine("afteralice-blank-platform", 27, { speaker: "Noa" });
  setLine("afteralice-blank-platform", 28, { speaker: "Unnamed Girl" });
  setLine("afteralice-blank-platform", 29, { speaker: "Moel" });
  setLine("afteralice-blank-platform", 31, { speaker: "World Echo" });
  setLine("afteralice-blank-platform", 32, { speaker: "World Echo" });
  setLine("afteralice-blank-platform", 35, { speaker: "Unnamed Girl" });
  setLine("afteralice-blank-platform", 36, { speaker: "Noa" });
  setLine("afteralice-blank-platform", 37, { speaker: "Unnamed Girl" });
  setLine("afteralice-blank-platform", 38, { speaker: "Moel" });
  setLine("afteralice-blank-platform", 40, { speaker: "Moel" });

  setLine("afteralice-blank-platform", 2, {
    text: "When Noa opened her eyes again, her feet were no longer on the damp little path at the garden's edge. They were standing somewhere like an old station — iron railings, a platform, timetables, waiting benches, and even a train in the distance that looked as though it might pull in at any moment, quiet behind the mist. But look for a little while longer and everything here revealed itself as nine-tenths finished: the clock was always missing one hand; the route map had a complete frame but no destination names inside; the announcement would begin and then its words would always seem to have been lightly erased."
  });
  setLine("afteralice-blank-platform", 3, {
    text: "This... doesn't look like the sea."
  });
  setLine("afteralice-blank-platform", 4, {
    text: "Mm. I can see that."
  });
  setLine("afteralice-blank-platform", 5, {
    text: "Her acknowledgment came so calmly that Hana blinked. Noa didn't smile. She only touched the journal, and for the first time felt it with complete clarity: an anchor point is not a map. She had written 'go see the sea,' and the world had genuinely caught that future — but it had not promised to unfold the way anyone expected to be most direct."
  });
  setLine("afteralice-blank-platform", 6, {
    text: "Like reality that was half-built, and then stopped here first."
  });
  setLine("afteralice-blank-platform", 7, {
    text: "Not unfinished construction. Not yet decided."
  });
  setLine("afteralice-blank-platform", 8, {
    text: "The platform floor had no dust, no old newspapers, no leaf scraps blown in by the wind. Even in places where any other station would have accumulated enough small traces, it was clean. Not the cleanliness of something swept — the cleanliness of something that had barely happened."
  });
  setLine("afteralice-blank-platform", 9, {
    text: "The time here — feels frozen."
  });
  setLine("afteralice-blank-platform", 10, {
    text: "Not frozen. The time here is waiting for a decision. Time doesn't move forward on its own."
  });
  setLine("afteralice-blank-platform", 11, {
    text: "The platform extended in both directions with no visible end. The names on the timetable looked like real words from a distance — up close they blurred, as if someone had just run a hand across them, only to become clear again when you stepped back."
  });
  setLine("afteralice-blank-platform", 12, {
    text: "There's a vending machine here."
  });
  setLine("afteralice-blank-platform", 13, {
    text: "The vending machine's labels were extremely simple — only 'drinkable' and 'edible,' no product names, no prices. A slip of paper next to the coin slot read: 'Confirmed Suitable.' Hana looked at it once, and did not press anything."
  });
  setLine("afteralice-blank-platform", 14, {
    text: "There's a train on the timetable. 'Arriving soon' every few minutes — and it has never come."
  });
  setLine("afteralice-blank-platform", 15, {
    text: "This place is teaching people to wait."
  });
  setLine("afteralice-blank-platform", 16, {
    text: "Wait for what?"
  });
  setLine("afteralice-blank-platform", 17, {
    text: "Wait for an 'it's enough now.' Wait until this place starts to feel more like an endpoint than anywhere else — and then start following along."
  });
  setLine("afteralice-blank-platform", 18, {
    text: "Noa said nothing, and held the journal a little tighter. She looked at the timetable — there really was a character there that flickered; every time she tried to read it clearly, it became something else."
  });
  setLine("afteralice-blank-platform", 19, {
    text: "There was a white ticket on the ground. Hana bent to pick it up, turned it over — both sides blank. She paused, then set it back in its place — not because it was useless, but because that spot looked like where it belonged."
  });
  setLine("afteralice-blank-platform", 20, {
    text: "...I almost put it in my bag."
  });
  setLine("afteralice-blank-platform", 21, {
    text: "Me too. For a moment the rules here felt so natural — so natural I forgot to ask why I was following them."
  });
  setLine("afteralice-blank-platform", 22, {
    text: "That naturalness is the problem."
  });
  setLine("afteralice-blank-platform", 23, {
    text: "The announcement sounded once, spoke halfway, and stopped. It had named the beginning of some place, and the rest never followed. No one asked where — they probably knew an answer wouldn't come."
  });
  setLine("afteralice-blank-platform", 24, {
    text: "As the group walked toward the platform's edge, the light shifted to a slightly different angle. Not darker, not brighter — only the near and the far became equally calm at the same moment."
  });
  setLine("afteralice-blank-platform", 25, {
    text: "There's someone there."
  });
  setLine("afteralice-blank-platform", 26, {
    text: "The figure in the distance, white as a gap left in a page, stood on or near the bench. It was hard to say exactly where — only that she belonged to the layer of this space most likely to let people slip past without noticing."
  });
  setLine("afteralice-blank-platform", 27, {
    text: "Noa reached for the journal on instinct, wanting to write 'sea' again, more clearly. But the impulse had barely risen before she stopped herself. She suddenly understood: the most dangerous thing here was not being lost. It was supplying everything in sight too quickly with a second half that looked more correct. The very last thing she should do now was write the place in front of her into an answer that was easier to understand — just to get back to the shore."
  });
  setLine("afteralice-blank-platform", 28, {
    text: "It was then that Noa saw the girl at the far end of the bench. She sat very still, both hands pressed against her knees, her head as if she had been waiting a long time — yet her outline so light it seemed someone had only just written her here. Not transparent, not a ghost — more like a page already turned open, but not yet filled."
  });
  setLine("afteralice-blank-platform", 29, {
    text: "...Can you see me?"
  });
  setLine("afteralice-blank-platform", 30, {
    text: "I can."
  });
  setLine("afteralice-blank-platform", 31, {
    text: "Good. I was just starting to think I'd been missed again."
  });
  setLine("afteralice-blank-platform", 32, {
    text: "Being missed doesn't mean you don't exist."
  });
  setLine("afteralice-blank-platform", 33, {
    text: "The words were light, like someone simply returning a fact to its proper place. But Noa felt something press against her chest after she heard them. She had a sudden strange feeling: they had not walked into some unfamiliar location — they had walked into a place where many 'lives that hadn't had time to continue' had briefly stopped."
  });
  setLine("afteralice-blank-platform", 34, {
    text: "Identity — interrupted."
  });
  setLine("afteralice-blank-platform", 35, {
    text: "Unfinished state confirmed."
  });
  setLine("afteralice-blank-platform", 36, {
    text: "After the announcement, the platform lights blinked one by one, softly. No one had given a command, no one had been called by name. But in that moment everyone understood: this place had started to notice them. Noa gripped the journal but did not open it. She suddenly knew: the most important thing next was perhaps not finding the sea — it was making sure no one in this place got written into the most convenient answer first."
  });
  setLine("afteralice-blank-platform", 37, {
    text: "No one moved. The platform held itself up around them all, as if it were waiting for someone to decide on its behalf."
  });
  setLine("afteralice-blank-platform", 38, {
    text: "...The train here doesn't come."
  });
  setLine("afteralice-blank-platform", 39, {
    text: "I know."
  });
  setLine("afteralice-blank-platform", 40, {
    text: "But everyone who's ever been here has waited for it."
  });
  setLine("afteralice-blank-platform", 41, {
    text: "The ones who waited for it — they all ended up in a place they hadn't chosen."
  });

  // ─────────────────────────────────────────────
  // Chapter 03 – afteralice-unseen-companion
  // ─────────────────────────────────────────────
  setLine("afteralice-unseen-companion", 1, {
    eyebrow: "After Alice | Side Story",
    title: "The Unseen Companion",
    subtitle: "Not a ghost, not a complete person. More like an existence not yet written through.",
    location: "Deep in the Blank Platform"
  });
  setRange("afteralice-unseen-companion", 2, 86, { speaker: "Narration" });
  setLine("afteralice-unseen-companion", 3,  { speaker: "Unnamed Girl" });
  setLine("afteralice-unseen-companion", 4,  { speaker: "Noa" });
  setLine("afteralice-unseen-companion", 5,  { speaker: "Unnamed Girl" });
  setLine("afteralice-unseen-companion", 7,  { speaker: "Hana" });
  setLine("afteralice-unseen-companion", 8,  { speaker: "Unnamed Girl" });
  setLine("afteralice-unseen-companion", 9,  { speaker: "Yume" });
  setLine("afteralice-unseen-companion", 10, { speaker: "Alice" });
  setLine("afteralice-unseen-companion", 11, { speaker: "Moel" });
  setLine("afteralice-unseen-companion", 13, { speaker: "Hana" });
  setLine("afteralice-unseen-companion", 14, { speaker: "Unnamed Girl" });
  setLine("afteralice-unseen-companion", 15, { speaker: "Hana" });
  setLine("afteralice-unseen-companion", 17, { speaker: "Unnamed Girl" });
  setLine("afteralice-unseen-companion", 18, { speaker: "Yume" });
  setLine("afteralice-unseen-companion", 20, { speaker: "Noa" });
  setLine("afteralice-unseen-companion", 21, { speaker: "Unnamed Girl" });
  setLine("afteralice-unseen-companion", 22, { speaker: "Moel" });
  setLine("afteralice-unseen-companion", 24, { speaker: "Unnamed Girl" });
  setLine("afteralice-unseen-companion", 25, { speaker: "Noa" });
  setLine("afteralice-unseen-companion", 28, { speaker: "Alice" });
  setLine("afteralice-unseen-companion", 29, { speaker: "Unnamed Girl" });
  setLine("afteralice-unseen-companion", 30, { speaker: "Alice" });
  setLine("afteralice-unseen-companion", 31, { speaker: "Noa" });
  setLine("afteralice-unseen-companion", 32, { speaker: "Unnamed Girl" });
  setLine("afteralice-unseen-companion", 33, { speaker: "Noa" });
  setLine("afteralice-unseen-companion", 35, { speaker: "Hana" });
  setLine("afteralice-unseen-companion", 36, { speaker: "Yume" });
  setLine("afteralice-unseen-companion", 37, { speaker: "Alice" });
  setLine("afteralice-unseen-companion", 38, { speaker: "Hana" });
  setLine("afteralice-unseen-companion", 39, { speaker: "Hana" });
  setLine("afteralice-unseen-companion", 41, { speaker: "Yume" });
  setLine("afteralice-unseen-companion", 42, { speaker: "Unnamed Girl" });
  setLine("afteralice-unseen-companion", 43, { speaker: "Alice" });
  setLine("afteralice-unseen-companion", 45, { speaker: "Unnamed Girl" });
  setLine("afteralice-unseen-companion", 46, { speaker: "Noa" });
  setLine("afteralice-unseen-companion", 47, { speaker: "Unnamed Girl" });
  setLine("afteralice-unseen-companion", 48, { speaker: "Noa" });
  setLine("afteralice-unseen-companion", 50, { speaker: "Unnamed Girl" });
  setLine("afteralice-unseen-companion", 51, { speaker: "Hana" });
  setLine("afteralice-unseen-companion", 53, { speaker: "Unnamed Girl" });
  setLine("afteralice-unseen-companion", 54, { speaker: "Yume" });
  setLine("afteralice-unseen-companion", 55, { speaker: "Alice" });
  setLine("afteralice-unseen-companion", 57, { speaker: "Moel" });
  setLine("afteralice-unseen-companion", 61, { speaker: "Unnamed Girl" });
  setLine("afteralice-unseen-companion", 62, { speaker: "Noa" });
  setLine("afteralice-unseen-companion", 66, { speaker: "Unnamed Girl" });
  setLine("afteralice-unseen-companion", 67, { speaker: "Noa" });
  setLine("afteralice-unseen-companion", 68, { speaker: "Unnamed Girl" });
  setLine("afteralice-unseen-companion", 70, { speaker: "Unnamed Girl" });
  setLine("afteralice-unseen-companion", 71, { speaker: "Noa" });
  setLine("afteralice-unseen-companion", 72, { speaker: "Noa" });
  setLine("afteralice-unseen-companion", 74, { speaker: "Moel" });
  setLine("afteralice-unseen-companion", 77, { speaker: "Unnamed Girl" });
  setLine("afteralice-unseen-companion", 79, { speaker: "Hana" });
  setLine("afteralice-unseen-companion", 80, { speaker: "Alice" });
  setLine("afteralice-unseen-companion", 82, { speaker: "Noa" });
  setLine("afteralice-unseen-companion", 84, { speaker: "World Echo" });
  setLine("afteralice-unseen-companion", 86, { speaker: "Moel" });

  setLine("afteralice-unseen-companion", 2, {
    text: "A little further in, the sounds of the platform grew softer. The first thing Noa could see clearly was the girl on the bench. She sat very still, both hands pressed against her knees — her hair and the hem of her clothes without quite-fixed edges, as if someone had written her here but not yet decided who she would finally become."
  });
  setLine("afteralice-unseen-companion", 3, {
    text: "...Can you see me?"
  });
  setLine("afteralice-unseen-companion", 4, {
    text: "I can."
  });
  setLine("afteralice-unseen-companion", 5, {
    text: "Good. I thought I might have become too faint... too faint even to be seen."
  });
  setLine("afteralice-unseen-companion", 6, {
    text: "Figures passed nearby and not one of them glanced toward the bench — as if there was only air there, as if there had only ever been air there. Noa's chest contracted quietly. She finally understood, truly, that Moel's phrase about 'things that get missed' was not a metaphor. This place really did let certain presences slide out of other people's sight."
  });
  setLine("afteralice-unseen-companion", 7, {
    text: "Have you been here alone for a long time?"
  });
  setLine("afteralice-unseen-companion", 8, {
    text: "I don't know. I was going somewhere, I think. Then the words on the platform sign disappeared, and I can't remember if I ever had a name."
  });
  setLine("afteralice-unseen-companion", 9, {
    text: "Like a page that's already been turned, but the words haven't finished falling onto it."
  });
  setLine("afteralice-unseen-companion", 10, {
    text: "Don't define her yet. The easiest thing for this place to take from her is the part that can still change."
  });
  setLine("afteralice-unseen-companion", 11, {
    text: "Here, the more urgently you try to explain yourself, the more easily you dissolve."
  });
  setLine("afteralice-unseen-companion", 12, {
    text: "The unnamed girl seemed to try the words somewhere inside herself. She didn't ask again who she was — she only, very lightly, let her hands open a little from her knees. It was a small enough movement to be beneath mention. But Noa saw it clearly: for some people, simply being allowed 'not to have to explain yourself yet' was already like being granted permission to live a little longer."
  });
  setLine("afteralice-unseen-companion", 13, {
    text: "No one arranged anything. Only everyone slowly settled into a kind of even distance. Hana brought her to the station display and went through the place names one by one, knowing each like an old friend. The unnamed girl stood behind her, looked for a long while, and said: not one of these is anywhere I know."
  });
  setLine("afteralice-unseen-companion", 14, {
    text: "That's all right. Places don't have to be somewhere you've been."
  });
  setLine("afteralice-unseen-companion", 15, {
    text: "Can I only want to go?"
  });
  setLine("afteralice-unseen-companion", 16, {
    text: "Of course. Wanting to go matters more than having gone. Places you've already been are already there — they don't need to be wanted anymore."
  });
  setLine("afteralice-unseen-companion", 17, {
    text: "Yume sat nearby and opened a book she'd found from somewhere, and began reading aloud, quietly. The unnamed girl loosened her grip on the hem of her skirt and moved half a step in that direction."
  });
  setLine("afteralice-unseen-companion", 18, {
    text: "It's about something that happened, isn't it."
  });
  setLine("afteralice-unseen-companion", 19, {
    text: "Something still in progress. The beginning and the end are both there. The middle isn't finished yet."
  });
  setLine("afteralice-unseen-companion", 20, {
    text: "In the time that followed, things felt more ordinary than anyone expected. Hana would sit beside her and listen together to the sound of wind from the announcement — not asking about the past. Yume would occasionally look down at her, as if checking whether a page not yet finished was finally willing to grow on its own. Alice never drew close, yet never once let a 'you should be someone' fall. And Moel seemed as though she had encountered this kind of person — someone who got missed — at boundary edges before, but had no readier answer than anyone for how to keep them; she only spoke when it truly mattered."
  });
  setLine("afteralice-unseen-companion", 21, {
    text: "Further into the platform stood a vending machine. Its casing was intact, the buttons lit, a row of what looked like drinks behind the glass — yet every label was blank. The unnamed girl stood in front of it for a long time, as if uncertain whether pressing something — 'choosing by myself, not knowing what I'd get' — first required some kind of permission."
  });
  setLine("afteralice-unseen-companion", 22, {
    text: "If you want to try one, try it. You don't need to know its name first."
  });
  setLine("afteralice-unseen-companion", 23, {
    text: "But what if I choose wrong?"
  });
  setLine("afteralice-unseen-companion", 24, {
    text: "Then be wrong once. The most dangerous thing here is not being wrong — it's never having had the chance to choose before someone else picks the safest one for you."
  });
  setLine("afteralice-unseen-companion", 25, {
    text: "The unnamed girl blinked, then finally pressed her fingertip to one of the buttons. An unsteady rolling sound came from inside the machine, and a drink that was almost colorless — almost no color at all — dropped out. She held it in both hands, as if cradling the very small, very real choice she had just made herself. It was the first time Noa saw her smile. Not relief, not joy that had forgotten itself. Just the lightest possible lift at the corners of her mouth — as if she had just learned, 'Oh, I can choose one first, too.'"
  });
  setLine("afteralice-unseen-companion", 26, {
    text: "Even if I choose wrong, I don't immediately disappear. So that's how it is."
  });
  setLine("afteralice-unseen-companion", 27, {
    text: "Yes. A lot of things — you only know if that's really where you wanted to go after you've chosen."
  });
  setLine("afteralice-unseen-companion", 28, {
    text: "In the time that came after, the unnamed girl began to occupy a small, unsteady amount of space. When someone turned, she'd step back; when someone reached out, she'd lean slightly to the side. But she was there. That much became very certain."
  });
  setLine("afteralice-unseen-companion", 29, {
    text: "Are you here often?"
  });
  setLine("afteralice-unseen-companion", 30, {
    text: "Not sure. I just — this place hasn't shut me out."
  });
  setLine("afteralice-unseen-companion", 31, {
    text: "Then that counts as often."
  });
  setLine("afteralice-unseen-companion", 32, {
    text: "Noa wrote a sentence in the journal, stopped halfway, and rewrote: 'The unnamed girl chose something orange today.' She didn't finish it. Just writing that much felt like enough."
  });
  setLine("afteralice-unseen-companion", 33, {
    text: "You're recording her."
  });
  setLine("afteralice-unseen-companion", 34, {
    text: "Only a note. Better than nothing written at all."
  });
  setLine("afteralice-unseen-companion", 35, {
    text: "Once, the wind circled back from the far end of the platform and caught the ends of the unnamed girl's hair where they hung at her knees. She reached up on instinct, then stopped herself halfway — as if she still wasn't used to the wind actually touching her. Noa watched that small pause, and something quiet and dull pressed at her chest. Only then did she fully understand: for some people, being acknowledged by the world, even a little, is like learning to breathe all over again."
  });
  setLine("afteralice-unseen-companion", 36, {
    text: "Another time, the announcement suddenly broke into something very much like a woman's voice saying a train was arriving. The unnamed girl stood up almost immediately, the near-colorless drink in her hand swaying lightly. She took half a step forward — then stopped herself. Because the announcement had cut off at the most important station name, leaving only a small tail of something gentle and unfinished. She stood in place and listened for a long time, then laughed softly — as if she had just managed, slowly, to turn 'not every voice I hear has to be followed' into something she herself could do."
  });
  setLine("afteralice-unseen-companion", 37, {
    text: "You stopped."
  });
  setLine("afteralice-unseen-companion", 38, {
    text: "Because I suddenly felt like I could decide first — whether to go over or not."
  });
  setLine("afteralice-unseen-companion", 39, {
    text: "Right. Not every time a door opens do you have to follow it right away."
  });
  setLine("afteralice-unseen-companion", 40, {
    text: "If you don't want to talk about the past, then listen to this instead."
  });
  setLine("afteralice-unseen-companion", 41, {
    text: "Hana didn't keep asking where she came from. She only reached out and touched the edge of the bench. The fragmented wind sounds from the announcement seemed to settle at her touch, and actually drew out something like the ebb and flow of a tide. The unnamed girl blinked, then very slowly leaned her body toward that sound — as if she had finally found a way to be somewhere without having to answer any questions first."
  });
  setLine("afteralice-unseen-companion", 42, {
    text: "Every time you hear that sound, you become a little more steady."
  });
  setLine("afteralice-unseen-companion", 43, {
    text: "Because it doesn't sound like it's asking who I am."
  });
  setLine("afteralice-unseen-companion", 44, {
    text: "Some questions, asked too early, turn into a blade on their own."
  });
  setLine("afteralice-unseen-companion", 45, {
    text: "Then no asking today. If you want to sit, we'll sit with you a while. If you want to walk a little further in, we'll walk a little further together."
  });
  setLine("afteralice-unseen-companion", 46, {
    text: "Is that... allowed?"
  });
  setLine("afteralice-unseen-companion", 47, {
    text: "It is. Not every blank needs to be explained right away."
  });
  setLine("afteralice-unseen-companion", 48, {
    text: "Noa lightly held out the aquarium flyer. The unnamed girl took it slowly, as if afraid her hand might pass right through. But the paper stayed quiet and still in her palm — the blue jellyfish lit by the platform overhead lights, as if floating in a very quiet other kind of water."
  });
  setLine("afteralice-unseen-companion", 49, {
    text: "Did someone leave this for you too?"
  });
  setLine("afteralice-unseen-companion", 50, {
    text: "Yes. But it didn't keep me in the past. It only let me know: some places you want to go — even if you can't get there at first — you can still keep walking toward them, a little at a time."
  });
  setLine("afteralice-unseen-companion", 51, {
    text: "Then what if I also want to go somewhere, but I don't even have a name for who I am yet?"
  });
  setLine("afteralice-unseen-companion", 52, {
    text: "Then keep the 'wanting to go.' The rest can wait."
  });
  setLine("afteralice-unseen-companion", 53, {
    text: "After she said it, Noa herself went quiet for a moment. She suddenly realized: that sentence had been for herself as much as for anyone else. She had written 'the shore' all the way to here not because she already knew what she would find when she arrived, but only because she wanted to keep that quiet 'want to go' somewhere in the real. As it turned out, an anchor point sometimes doesn't arrange the future for the world — it protects the right for yourself and others to not have to know everything just yet."
  });
  setLine("afteralice-unseen-companion", 54, {
    text: "So blue doesn't have to belong to the sky."
  });
  setLine("afteralice-unseen-companion", 55, {
    text: "When you really get to the shore, you'll find that blue doesn't only belong to the sea either."
  });
  setLine("afteralice-unseen-companion", 56, {
    text: "The unnamed girl looked at the flyer for a long time — as if touching, for the first time, the reality of 'somewhere else truly exists' through a concrete object. And Noa, in that same moment, understood more clearly: she had kept this paper all the way to now not only to remember someone who couldn't come with her, but to keep a small, unfading piece of evidence that 'still being able to go together' remained a possibility."
  });
  setLine("afteralice-unseen-companion", 57, {
    text: "A little further on, they all slowly walked a short way along the platform together. This time the unnamed girl didn't stay at the very back — she learned to put her steps between Noa's and Hana's. Unremarkable, even she herself seemed not to notice. But Noa saw it. For the first time she felt: affection sometimes comes before understanding. You don't yet know where she came from, whether she'll stay, or what she'll become — and yet you've already started hoping she won't be quietly missed again."
  });
  setLine("afteralice-unseen-companion", 58, {
    text: "Why does the sea keep moving and still always be called the sea?"
  });
  setLine("afteralice-unseen-companion", 59, {
    text: "Because it isn't recognized by any single wave."
  });
  setLine("afteralice-unseen-companion", 60, {
    text: "Some existences don't need to be explained completely before they count as real."
  });
  setLine("afteralice-unseen-companion", 61, {
    text: "The unnamed girl seemed to absorb both sentences together. She didn't nod right away — only folded the flyer back to its original shape, and then, very carefully, pressed every crease flat. The motion was clumsy, yet handled with something close to tenderness. As if she had finally begun to understand: some things are not worth keeping carefully because they already belong to you — but because they haven't fully left yet, and so they should be held a little more gently."
  });
  setLine("afteralice-unseen-companion", 62, {
    text: "You're good the way you are right now. Learning to step toward what you want to be near — that matters more than rushing to know who you are."
  });
  setLine("afteralice-unseen-companion", 63, {
    text: "Noa quietly opened the journal. A fresh page. The pen tip hovered at the top. She held the pen, and for a moment did not write."
  });
  setLine("afteralice-unseen-companion", 64, {
    text: "The unnamed girl sat beside her — not because she was invited, only because it was natural for her to be there. She looked down and saw Noa's pen suspended above the blank."
  });
  setLine("afteralice-unseen-companion", 65, {
    text: "Noa wrote two characters. Just two. Then stopped, ran her thumb lightly over the ink, and smudged them away. Not fully clean — but those two characters were gone."
  });
  setLine("afteralice-unseen-companion", 66, {
    text: "You erased it."
  });
  setLine("afteralice-unseen-companion", 67, {
    text: "Writing a name takes nerve. I didn't ask what you wanted to carry."
  });
  setLine("afteralice-unseen-companion", 68, {
    text: "..."
  });
  setLine("afteralice-unseen-companion", 69, {
    text: "The unnamed girl didn't say thank you. But she placed her hand lightly on the blank of that journal page. Not pointing at it — only resting there. The two of them sat for a while without moving."
  });
  setLine("afteralice-unseen-companion", 70, {
    text: "If I keep staying here... do you think someday I'll be seen the way you all are?"
  });
  setLine("afteralice-unseen-companion", 71, {
    text: "I don't know."
  });
  setLine("afteralice-unseen-companion", 72, {
    text: "But if you still want to be here now — then this isn't finished yet."
  });
  setLine("afteralice-unseen-companion", 73, {
    text: "After she said it, Noa herself paused. She suddenly realized she hadn't been comforting anyone — she had made something closer to a factual judgment: as long as that person herself hasn't given up being here, the world doesn't have the right to decide her ending too quickly."
  });
  setLine("afteralice-unseen-companion", 74, {
    text: "Remember this feeling. When you write anything next — the first thing to protect is not the outcome. It's this place: where she still wants to stay."
  });
  setLine("afteralice-unseen-companion", 75, {
    text: "When Noa heard those words, she couldn't help looking down at the journal. She suddenly understood: an anchor point doesn't only drive an entrance into a path — sometimes it's like leaving a testimony that says 'I still want to be here,' on someone's behalf. Without that place, any later stability might only be a more beautiful kind of closure. That understanding made her chest tighten, but also made her feel, for the first time, that she was not recklessly holding something too large. She at least now knew what to protect first."
  });
  setLine("afteralice-unseen-companion", 76, {
    text: "As if in response, the platform — silent until now — gave a single imperceptible contraction. The overhead lights didn't change, the wind didn't stop — only the shadows on the bench thinned for a single moment. The unnamed girl looked down at her fingertips, as if realizing for the first time: even the fact of 'wanting to stay' could be taken by something faster as a reason to complete her."
  });
  setLine("afteralice-unseen-companion", 77, {
    text: "...May I stay?"
  });
  setLine("afteralice-unseen-companion", 78, {
    text: "Those words were so soft they were almost like wind. But the moment they settled, everything around them — everything that had been barely passing as ordinary — went still for an instant. Hana reached on instinct to say 'yes,' her hand already rising a little; Yume noticed one step earlier that something at the depths of the sign board seemed to look up at the same time; Alice's gaze fell immediately to the edge of the bench, as if she could already see that some judgment, somewhere deeper, was beginning to aim this way."
  });
  setLine("afteralice-unseen-companion", 79, {
    text: "If you want to—"
  });
  setLine("afteralice-unseen-companion", 80, {
    text: "Don't finish that sentence yet."
  });
  setLine("afteralice-unseen-companion", 81, {
    text: "Noa also nearly answered in that moment. She almost wanted to tell her right away: yes, you can stay, come with us to the shore, back to the garden, keep walking every part of what comes next. But that surge had barely risen before she heard the space pull quiet — barely — as if something were waiting for her to write that wish into a more convenient result."
  });
  setLine("afteralice-unseen-companion", 82, {
    text: "...Not yet. Just stay here for now."
  });
  setLine("afteralice-unseen-companion", 83, {
    text: "The unnamed girl stared at her, as if she hadn't yet worked out whether that 'not yet' was pushing her away or protecting her. But the next moment Noa herself understood first: if anyone completed that sentence for her now — 'yes, you can stay' — then the 'you can stay' would no longer be something growing from inside her. She didn't speak again. She only set her hand lightly on the back of the unnamed girl's hand, letting her feel first: someone is here, and that someone is not planning to speak any conclusion in her place."
  });
  setLine("afteralice-unseen-companion", 84, {
    text: "Identity unconfirmed."
  });
  setLine("afteralice-unseen-companion", 85, {
    text: "The space seemed to be pulled, lightly, tighter by something invisible. The unnamed girl's shoulders and the ends of her hair faded at the same moment — as if 'staying' had barely been spoken before something deeper had taken it to compare against whether it should be permitted."
  });
  setLine("afteralice-unseen-companion", 86, {
    text: "Guess away."
  });

  // ─────────────────────────────────────────────
  // Chapter 04 – afteralice-unnamed-domain
  // ─────────────────────────────────────────────
  setLine("afteralice-unnamed-domain", 1, {
    eyebrow: "After Alice | Side Story",
    title: "Unnamed Domain",
    subtitle: "A place where naming too soon compresses everything into safer answers.",
    location: "The Nameless Corridor"
  });
  setRange("afteralice-unnamed-domain", 2, 68, { speaker: "Narration" });
  setLine("afteralice-unnamed-domain", 3, { speaker: "Moel" });
  setLine("afteralice-unnamed-domain", 4, { speaker: "Noa" });
  setLine("afteralice-unnamed-domain", 5, { speaker: "Alice" });
  setLine("afteralice-unnamed-domain", 7, { speaker: "Hana" });
  setLine("afteralice-unnamed-domain", 9, { speaker: "Hana" });
  setLine("afteralice-unnamed-domain", 10, { speaker: "Yume" });
  setLine("afteralice-unnamed-domain", 11, { speaker: "Alice" });
  setLine("afteralice-unnamed-domain", 13, { speaker: "Noa" });
  setLine("afteralice-unnamed-domain", 14, { speaker: "Alice" });
  setLine("afteralice-unnamed-domain", 15, { speaker: "Noa" });
  setLine("afteralice-unnamed-domain", 16, { speaker: "Alice" });
  setLine("afteralice-unnamed-domain", 17, { speaker: "Moel" });
  setLine("afteralice-unnamed-domain", 19, { speaker: "Yume" });
  setLine("afteralice-unnamed-domain", 20, { speaker: "Hana" });
  setLine("afteralice-unnamed-domain", 22, { speaker: "Noa" });
  setLine("afteralice-unnamed-domain", 23, { speaker: "Moel" });
  setLine("afteralice-unnamed-domain", 25, { speaker: "Alice" });
  setLine("afteralice-unnamed-domain", 26, { speaker: "Noa" });
  setLine("afteralice-unnamed-domain", 27, { speaker: "Moel" });
  setLine("afteralice-unnamed-domain", 29, { speaker: "World Echo" });
  setLine("afteralice-unnamed-domain", 31, { speaker: "World Echo" });
  setLine("afteralice-unnamed-domain", 35, { speaker: "Dark Yume" });
  setLine("afteralice-unnamed-domain", 37, { speaker: "Dark Yume" });
  setLine("afteralice-unnamed-domain", 38, { speaker: "Dark Yume" });
  setLine("afteralice-unnamed-domain", 40, { speaker: "Dark Alice" });
  setLine("afteralice-unnamed-domain", 42, { speaker: "Dark Alice" });
  setLine("afteralice-unnamed-domain", 43, { speaker: "Dark Alice" });
  setLine("afteralice-unnamed-domain", 44, { speaker: "Dark Hana" });
  setLine("afteralice-unnamed-domain", 47, { speaker: "Yume" });
  setLine("afteralice-unnamed-domain", 48, { speaker: "Alice" });
  setLine("afteralice-unnamed-domain", 49, { speaker: "Hana" });
  setLine("afteralice-unnamed-domain", 50, { speaker: "Yume" });
  setLine("afteralice-unnamed-domain", 51, { speaker: "Alice" });
  setLine("afteralice-unnamed-domain", 52, { speaker: "Hana" });
  setLine("afteralice-unnamed-domain", 53, { speaker: "Moel" });
  setLine("afteralice-unnamed-domain", 56, { speaker: "Hana" });
  setLine("afteralice-unnamed-domain", 57, { speaker: "Yume" });
  setLine("afteralice-unnamed-domain", 58, { speaker: "Alice" });
  setLine("afteralice-unnamed-domain", 60, { speaker: "Hana" });
  setLine("afteralice-unnamed-domain", 62, { speaker: "Hana" });
  setLine("afteralice-unnamed-domain", 63, { speaker: "Yume" });
  setLine("afteralice-unnamed-domain", 64, { speaker: "Alice" });
  setLine("afteralice-unnamed-domain", 66, { speaker: "Moel" });

  setLine("afteralice-unnamed-domain", 2, {
    text: "Moel didn't finish anyone else's 'may I stay.' She offered no answer that looked more like an answer — she only led the group further in. Beyond the platform was no sea, no exit, only a white corridor extending deeper inside. There were many doors here, but every nameplate was frozen at the moment just before something was about to be written — as if the whole space preferred to hesitate endlessly rather than write anyone carelessly into a finished answer."
  });
  setLine("afteralice-unnamed-domain", 3, {
    text: "If I hadn't made that wrong step earlier, we'd still be on our way to the sea. Instead we've ended up here. This is called the Unnamed Domain. It doesn't belong to the garden, and it's not quite the outside world either. More like a place that things — things that refused to be filed away at once, that didn't want to be concluded by someone right then — managed to carve out for themselves at the edge of the world, a small piece of room."
  });
  setLine("afteralice-unnamed-domain", 4, {
    text: "So my journal... only happened to write the door-crack here?"
  });
  setLine("afteralice-unnamed-domain", 5, {
    text: "Right. What you wrote was never 'the sea is already there.' You only gave 'going to see the sea' an entrance that the real would temporarily recognize."
  });
  setLine("afteralice-unnamed-domain", 6, {
    text: "Scattered through the corridor were half-finished traces of life: a letter that got as far as a salutation; a paper flower folded into shape but never sent; tea in a cup that had gone cold long ago yet still held a little fragrance. Noa looked at them one by one, and suddenly understood that 'unfinished' wasn't only 'didn't have time' — it could also mean 'not yet willing to hand what came next to the most convenient explanation.'"
  });
  setLine("afteralice-unnamed-domain", 7, {
    text: "This place seems like it was always waiting for someone — and waited so long that the 'waiting' itself became what was left."
  });
  setLine("afteralice-unnamed-domain", 8, {
    text: "It wasn't clear whether anyone had lived here or only stopped for a while. One room, its door left open, held half a cracker from the night before, a jigsaw puzzle spread across a desk, a book with a bookmark still inside. It didn't look abandoned by time — it looked as though someone had been there one moment and simply wasn't the next."
  });
  setLine("afteralice-unnamed-domain", 9, {
    text: "The puzzle is missing three pieces. The three at the upper left."
  });
  setLine("afteralice-unnamed-domain", 10, {
    text: "The bookmark is on page one hundred and nineteen. No way to know at what age they stopped here."
  });
  setLine("afteralice-unnamed-domain", 11, {
    text: "These things were left here not because their owner no longer wanted them. It's because the owner didn't get to finish saying."
  });
  setLine("afteralice-unnamed-domain", 12, {
    text: "Noa walked up to the desk and looked at the jigsaw spread open there. The missing three pieces fell exactly at the center of the image — their absence didn't stop it from being a puzzle. It only stopped it from being declared complete."
  });
  setLine("afteralice-unnamed-domain", 13, {
    text: "My journal... can't write these people's endings for them, can it."
  });
  setLine("afteralice-unnamed-domain", 14, {
    text: "It can mark anchor points. It can open entrances. It can't write others' endings."
  });
  setLine("afteralice-unnamed-domain", 15, {
    text: "Can't write others' endings — you mean even if I remember, even if I write it down, I still can't find a resolution for every single thing here."
  });
  setLine("afteralice-unnamed-domain", 16, {
    text: "Not can't. Shouldn't. A journal marks anchor points not in order to lock a thing in place until someone comes to claim it."
  });
  setLine("afteralice-unnamed-domain", 17, {
    text: "It's here. Not waiting to be claimed. Not waiting to be ended. Only here."
  });
  setLine("afteralice-unnamed-domain", 18, {
    text: "Noa set the journal down on the desk without opening it. The spread puzzle and the blank journal lay side by side — both unfinished. Both still here."
  });
  setLine("afteralice-unnamed-domain", 19, {
    text: "Deep in the Unnamed Domain runs a corridor. No streetlights — but not truly dark either. The light was at the level of 'only just still existing,' like the last few minutes of an afternoon. On both sides were a row of small rooms with doors ajar."
  });
  setLine("afteralice-unnamed-domain", 20, {
    text: "The nearest room held a pair of men's hiking boots. The soles were worn to the edge; the laces hadn't been retied. Whoever passed through had set them carefully side by side at the threshold — not like discarding them, more like someone said 'wait just a moment' and kept waiting until they arrived here."
  });
  setLine("afteralice-unnamed-domain", 21, {
    text: "Many rooms in here — look like they were written halfway and then stopped. I hope they weren't finished. Only stopped here for a while."
  });
  setLine("afteralice-unnamed-domain", 22, {
    text: "There are other rooms. Not ours."
  });
  setLine("afteralice-unnamed-domain", 23, {
    text: "One room had a slip of paper wedged at its door. On it: a drawn sun, and beside it a column of numbers — as if some child had been recording sunset times on a mountain. The last line named a place in another land, written only halfway before the ink strayed past the edge of the paper."
  });
  setLine("afteralice-unnamed-domain", 24, {
    text: "Further in, a letter. The paper folded, its opening line reading 'I want you to know' — blank after that. The envelope sealed, an address on the back belonging to no city in any region. Never sent."
  });
  setLine("afteralice-unnamed-domain", 25, {
    text: "This letter — someone wrote it halfway."
  });
  setLine("afteralice-unnamed-domain", 26, {
    text: "Most things here are written halfway. Not because there was nothing left to say — but because they were taken somewhere else while still in the middle of saying."
  });
  setLine("afteralice-unnamed-domain", 27, {
    text: "One room's door was clearly sealed. No lock — only the door always shut. The group slowed passing it without agreement. Some things are safer when they're sealed."
  });
  setLine("afteralice-unnamed-domain", 28, {
    text: "Being sealed is also a way of existing."
  });
  setLine("afteralice-unnamed-domain", 29, {
    text: "I don't know if my journal is of any use here. Whether what's left here needs to be written down — or whether it already has its own more original way."
  });
  setLine("afteralice-unnamed-domain", 30, {
    text: "Recording is a form of respect. Not necessarily a modification."
  });
  setLine("afteralice-unnamed-domain", 31, {
    text: "Stability insufficient."
  });
  setLine("afteralice-unnamed-domain", 32, {
    text: "Convergence attempt beginning."
  });
  setLine("afteralice-unnamed-domain", 33, {
    text: "The temperature in the Unnamed Domain changed. Not colder — but too clear. As if some system had begun scanning every corner of this place, trembling as it prepared to build a file. The things in the small rooms shifted uneasily."
  });
  setLine("afteralice-unnamed-domain", 34, {
    text: "The first to be touched was not a person. On the letter that only got as far as 'I want you to know,' a safer, more standard salutation surfaced on the paper — then was erased; a few nameplates that had been blank at their edges began to grow uniform characters on their own; even the vending machine buttons visible in the distance reduced, one by one, to a single color. Everything here was being gently pressed toward 'the shape most easily explained.'"
  });
  setLine("afteralice-unnamed-domain", 35, {
    text: "What came first was not footsteps. Behind the row of nameplates that had just lit up at the corridor's end, three human shapes of excessive steadiness slowly rose. They looked as if they had been drawn out of the three sisters individually and ground colder and straighter, even their clothing and their gaze carrying a rightness that the world had already adopted."
  });
  setLine("afteralice-unnamed-domain", 36, {
    text: "Noa stopped breathing on instinct. She had never seen anything like this. The unnamed girl stiffened too, as if touched first by some invisible gaze. Yume, Alice, and Hana did not speak at once — as if seeing for the first time from the outside 'what they could be compressed into.' Yet in the very next instant they stepped forward, nearly in unison, placing Moel, Noa, and the unnamed girl behind them without a word. Only Moel's tail snapped rigid. This wasn't the reaction of someone seeing it for the first time — it was more like she had glimpsed a similar shadow once, a long time ago when she'd gotten lost near a boundary, and now it had finally walked up close enough to be real."
  });
  setLine("afteralice-unnamed-domain", 37, {
    text: "The unnamed girl's outline was first lit too clearly, then immediately began to fade — as if the convergence couldn't decide what to make of her and could only shave away her less stable edges first. Noa had only looked at those three shadows a moment, when the journal in her hands grew suddenly heavy, as if another kind of writing had pressed on top, and her fingertips went numb, and a weight spread slowly through her shoulders and back."
  });
  setLine("afteralice-unnamed-domain", 38, {
    text: "...Of all the times."
  });
  setLine("afteralice-unnamed-domain", 39, {
    text: "Don't stare too long. They'll come at you along whatever face of yourself is easiest to write."
  });
  setLine("afteralice-unnamed-domain", 40, {
    text: "We can't stay here. Fall back."
  });
  setLine("afteralice-unnamed-domain", 41, {
    text: "Redundant records will continue to generate deviation."
  });
  setLine("afteralice-unnamed-domain", 42, {
    text: "Why are they here. Without explanation, there is no right to a place."
  });
  setLine("afteralice-unnamed-domain", 43, {
    text: "Find the reason they are stranded here. State those reasons clearly. Blurred existence is not permitted."
  });
  setLine("afteralice-unnamed-domain", 44, {
    text: "The things in the small rooms did not answer. They did not know why they were here — or the people they came from didn't know either. Questions without answers were classified as errors in Dark Yume's system."
  });
  setLine("afteralice-unnamed-domain", 45, {
    text: "Unfinished state, not suitable for long-term preservation."
  });
  setLine("afteralice-unnamed-domain", 46, {
    text: "Dark Alice did not look at any person. She looked at the floor, the walls, the air — she was evaluating everything in this space that had not yet been filed. Like a catalogue opening too slowly."
  });
  setLine("afteralice-unnamed-domain", 47, {
    text: "Residual material. Unclassified. Awaiting processing."
  });
  setLine("afteralice-unnamed-domain", 48, {
    text: "Once catalogued, all ambiguous attributes are lost. This is a cleaner approach."
  });
  setLine("afteralice-unnamed-domain", 49, {
    text: "Being incomplete for too long becomes exhausting."
  });
  setLine("afteralice-unnamed-domain", 50, {
    text: "None of the voices were loud, none carried any anger. And that was precisely why they sounded like the kind of direction the world had already agreed was correct. Noa listened to those lines, and felt a cold spread up her back. What was frightening was not malice. It was 'all of this sounds completely reasonable.' What was more frightening: even the three sisters standing beside her went genuinely quiet for one beat."
  });
  setLine("afteralice-unnamed-domain", 51, {
    text: "The three sisters moved forward nearly at the same moment. Not because anyone had issued a command, or because anyone had worked it out in advance — only because when those three shadows truly drew close, they instinctively placed Moel, Noa, and the unnamed girl behind their own backs. Yume was the first to notice, as if the recording sound that synchronized perfectly with her own suddenly forced her to delete any 'pages without conclusions.' Alice could see most of the diverging paths at her feet vanish in an instant — she could almost watch directly as all paths converged toward a single answer. Hana's breath lightened unexpectedly, as if someone was gently telling her: you don't need to hurt anymore, you don't need to keep holding on to things that still hurt."
  });
  setLine("afteralice-unnamed-domain", 52, {
    text: "...Familiar. As if the part of me I always wrote but never wanted to hand over has stepped outside and stood there."
  });
  setLine("afteralice-unnamed-domain", 53, {
    text: "They're not just like us. They're more dangerous than us — because they look more like the answers this place would directly adopt."
  });
  setLine("afteralice-unnamed-domain", 54, {
    text: "Moel — take Noa and the unnamed girl back. They can't stand in front here."
  });
  setLine("afteralice-unnamed-domain", 55, {
    text: "They look like what we would be compressed into."
  });
  setLine("afteralice-unnamed-domain", 56, {
    text: "They're part of us. Not us."
  });
  setLine("afteralice-unnamed-domain", 57, {
    text: "That distinction is important."
  });
  setLine("afteralice-unnamed-domain", 58, {
    text: "Convergence is not a command. It's what happens naturally when no one objects."
  });
  setLine("afteralice-unnamed-domain", 59, {
    text: "The moment those words finished, the nameplates deep in the corridor lit one by one. Not switched on — more like behind each door someone was ready to deliver a more stable, tidier, unhesitating answer. The unnamed girl instinctively stepped back half a pace, but her outline faded by one layer first; when Noa reached to steady her, her own wrist was hit by the downward force, going soft, and she could only grip the journal harder."
  });
  setLine("afteralice-unnamed-domain", 60, {
    text: "Just at that moment, the unnamed girl suddenly turned to look in a certain direction at the corridor's end. She seemed touched by something very light, and then moved two steps in that direction without thinking. No door opened, no path appeared — but where she stopped, the white floor slowly thinned, revealing a seam like a page that hadn't been pressed flat. Not a safe zone — only a small piece of 'not yet finished' that her way of existing had temporarily pressed into being, inside the convergence."
  });
  setLine("afteralice-unnamed-domain", 61, {
    text: "Moel paused for an instant, frowning very lightly. She clearly hadn't expected that seam to open there — yet she immediately gambled: one hand locking Noa's wrist, the other guiding the unnamed girl, lightly but steadily, into that small gap not yet fully converged. The motion wasn't like a retreat — it was more like hiding a single piece that couldn't yet be ground away in a place the gears couldn't quite reach."
  });
  setLine("afteralice-unnamed-domain", 62, {
    text: "Noa, stay inside. We'll block the first wave."
  });
  setLine("afteralice-unnamed-domain", 63, {
    text: "Don't rush to write. First see clearly what this place wants to compress each of us into."
  });
  setLine("afteralice-unnamed-domain", 64, {
    text: "If you complete someone now, the world will use that as the basis to decide what comes next for them."
  });
  setLine("afteralice-unnamed-domain", 65, {
    text: "The three sisters stepped forward first — not passively separated, but as if they finally knew this wave had to be blocked by someone. Yume faced the coldest layer, Alice walked toward the shortest convergence path, Hana stood before the most tender and most dangerous layer. Moel pushed Noa and the unnamed girl into the white gap, then did not stop. She looked back once at the three brightening white layers outside, and her voice fell low:"
  });
  setLine("afteralice-unnamed-domain", 66, {
    text: "Don't write her complete yet. I'll go kick the second wave off course too."
  });
  setLine("afteralice-unnamed-domain", 67, {
    text: "The words were barely spoken before she had already turned back. The edge of the white gap shivered briefly as she left, then barely held steady again. Noa stood inside that gap and discovered for the first time: she didn't need to run after anyone. What she needed to do now was not lift everyone's weight onto her own back — it was to keep the person in front of her, not yet written full, and the blank in her own hands, steady on the side of 'still able to choose.'"
  });

  // ─────────────────────────────────────────────
  // Chapter 05 – afteralice-false-reboot
  // ─────────────────────────────────────────────
  setLine("afteralice-false-reboot", 1, {
    eyebrow: "After Alice | Side Story",
    title: "False Reboot",
    subtitle: "Layer one erases records. Layer two closes paths. Layer three wants to complete existence itself.",
    location: "The Triple Convergence Space"
  });
  setRange("afteralice-false-reboot", 2, 107, { speaker: "Narration" });
  setLine("afteralice-false-reboot", 5, { speaker: "World Echo" });
  setLine("afteralice-false-reboot", 6, { speaker: "World Echo" });
  setLine("afteralice-false-reboot", 7, { speaker: "World Echo" });
  setLine("afteralice-false-reboot", 9, { speaker: "Unnamed Girl" });
  setLine("afteralice-false-reboot", 10, { speaker: "Noa" });
  setLine("afteralice-false-reboot", 11, { speaker: "Moel" });
  setLine("afteralice-false-reboot", 13, { speaker: "Visitor" });
  setLine("afteralice-false-reboot", 14, { speaker: "Visitor" });
  setLine("afteralice-false-reboot", 15, { speaker: "Moel" });
  setLine("afteralice-false-reboot", 17, { speaker: "Noa" });
  setLine("afteralice-false-reboot", 18, { speaker: "Unnamed Girl" });
  setLine("afteralice-false-reboot", 20, { speaker: "Noa" });
  setLine("afteralice-false-reboot", 21, { speaker: "Moel" });
  setLine("afteralice-false-reboot", 23, { speaker: "Unnamed Girl" });
  setLine("afteralice-false-reboot", 24, { speaker: "Noa" });
  setLine("afteralice-false-reboot", 26, { speaker: "Unnamed Girl" });
  setLine("afteralice-false-reboot", 27, { speaker: "Noa" });
  setLine("afteralice-false-reboot", 28, { speaker: "Noa" });
  setLine("afteralice-false-reboot", 30, { speaker: "Moel" });
  setLine("afteralice-false-reboot", 32, { speaker: "Noa" });
  setLine("afteralice-false-reboot", 33, { speaker: "Moel" });
  setLine("afteralice-false-reboot", 35, { speaker: "Unnamed Girl" });
  setLine("afteralice-false-reboot", 36, { speaker: "Noa" });
  setLine("afteralice-false-reboot", 37, { speaker: "Unnamed Girl" });
  setLine("afteralice-false-reboot", 38, { speaker: "Noa" });
  setLine("afteralice-false-reboot", 40, { speaker: "Unnamed Girl" });
  setLine("afteralice-false-reboot", 41, { speaker: "Noa" });
  setLine("afteralice-false-reboot", 43, { speaker: "Moel" });
  setLine("afteralice-false-reboot", 45, { speaker: "Dark Yume" });
  setLine("afteralice-false-reboot", 47, { speaker: "Dark Yume" });
  setLine("afteralice-false-reboot", 48, { speaker: "Yume" });
  setLine("afteralice-false-reboot", 49, { speaker: "Dark Yume" });
  setLine("afteralice-false-reboot", 51, { speaker: "Dark Yume" });
  setLine("afteralice-false-reboot", 52, { speaker: "Yume" });
  setLine("afteralice-false-reboot", 53, { speaker: "Dark Yume" });
  setLine("afteralice-false-reboot", 55, { speaker: "Dark Yume" });
  setLine("afteralice-false-reboot", 57, { speaker: "Yume" });
  setLine("afteralice-false-reboot", 58, { speaker: "Dark Yume" });
  setLine("afteralice-false-reboot", 59, { speaker: "Yume" });
  setLine("afteralice-false-reboot", 61, { speaker: "Yume" });
  setLine("afteralice-false-reboot", 63, { speaker: "Yume" });
  setLine("afteralice-false-reboot", 65, { speaker: "Unnamed Girl" });
  setLine("afteralice-false-reboot", 66, { speaker: "Noa" });
  setLine("afteralice-false-reboot", 68, { speaker: "Unnamed Girl" });
  setLine("afteralice-false-reboot", 69, { speaker: "Noa" });
  setLine("afteralice-false-reboot", 71, { speaker: "Unnamed Girl" });
  setLine("afteralice-false-reboot", 72, { speaker: "Noa" });
  setLine("afteralice-false-reboot", 74, { speaker: "Moel" });
  setLine("afteralice-false-reboot", 76, { speaker: "Dark Alice" });
  setLine("afteralice-false-reboot", 78, { speaker: "Dark Alice" });
  setLine("afteralice-false-reboot", 80, { speaker: "Dark Alice" });
  setLine("afteralice-false-reboot", 82, { speaker: "Dark Alice" });
  setLine("afteralice-false-reboot", 85, { speaker: "Dark Alice" });
  setLine("afteralice-false-reboot", 87, { speaker: "Alice" });
  setLine("afteralice-false-reboot", 89, { speaker: "Dark Alice" });
  setLine("afteralice-false-reboot", 90, { speaker: "Alice" });
  setLine("afteralice-false-reboot", 91, { speaker: "Dark Alice" });
  setLine("afteralice-false-reboot", 92, { speaker: "Alice" });
  setLine("afteralice-false-reboot", 94, { speaker: "Alice" });
  setLine("afteralice-false-reboot", 96, { speaker: "Alice" });
  setLine("afteralice-false-reboot", 97, { speaker: "Moel" });
  setLine("afteralice-false-reboot", 99, { speaker: "Dark Alice" });
  setLine("afteralice-false-reboot", 101, { speaker: "Moel" });
  setLine("afteralice-false-reboot", 103, { speaker: "Unnamed Girl" });
  setLine("afteralice-false-reboot", 105, { speaker: "Unnamed Girl" });
  setLine("afteralice-false-reboot", 107, { speaker: "Narration" });

  setLine("afteralice-false-reboot", 2, {
    text: "After Moel brought Noa and the unnamed girl into the white gap that had remained unconverged because of the unnamed girl, the white outside did not immediately close. It seemed forced to continue in a more thorough way: the same space splitting into three layers, interlocking and restraining each other, pulling the three sisters — along the positions each of them had stepped out to hold — toward the proposition most easily persuaded."
  });
  setLine("afteralice-false-reboot", 3, {
    text: "These were not three layers cut at random. The Dark Triad was taking over positions that had always been theirs; while existences like Noa, Moel, and the unnamed girl — 'not yet defined' or 'still generating branches' — were simultaneously treated as problems needing correction, classification, or simply deletion."
  });
  setLine("afteralice-false-reboot", 4, {
    text: "Moel hadn't finished explaining 'of all the times.' She only recognized it: those three shadows were not something you could stand and watch slowly. If anyone hesitated a beat longer, Noa and the unnamed girl would also be pulled in, through whichever face of themselves was most easily written into an answer. She pulled people away from that first hit not because she knew the exit, but because she had seen what 'not getting out in time' looked like."
  });
  setLine("afteralice-false-reboot", 5, {
    text: "Anomalous anchor-point source confirmed."
  });
  setLine("afteralice-false-reboot", 6, {
    text: "Branch-generating entity."
  });
  setLine("afteralice-false-reboot", 7, {
    text: "Convergence priority: elevated."
  });
  setLine("afteralice-false-reboot", 8, {
    text: "This wasn't summoning Noa, and it wasn't commanding anyone to respond. It was more like the world giving a low operational hum: it had confirmed that here was a presence that kept leaving anchor points of choice, and also confirmed that here was a person still not written through — and so the convergence rose naturally, like water slowly rising past the rim."
  });
  setLine("afteralice-false-reboot", 9, {
    text: "Are they being separated because of me?"
  });
  setLine("afteralice-false-reboot", 10, {
    text: "No. They stepped out first because they were afraid — before you'd had a chance to speak — you'd be written into something else."
  });
  setLine("afteralice-false-reboot", 11, {
    text: "Remember one thing. What we're protecting right now is not an answer — it's time. As long as you can still finish a sentence yourself, you haven't lost."
  });
  setLine("afteralice-false-reboot", 12, {
    text: "The white gap was not a visible place. It was more like a page not yet folded right — hard to find the edge from outside, and from inside only possible to feel which direction the distant pull was leaning. But in that moment, a layer of extremely thin, extremely bright noise leaked in from somewhere in the blank, as if someone in another place had re-opened a viewing channel, and that channel happened to graze this gap."
  });
  setLine("afteralice-false-reboot", 13, {
    text: "...Where did they go? They disappeared."
  });
  setLine("afteralice-false-reboot", 14, {
    text: "Did you see?"
  });
  setLine("afteralice-false-reboot", 15, {
    text: "...Them again."
  });
  setLine("afteralice-false-reboot", 16, {
    text: "Visitor's gaze couldn't reach the gap. It was like a back-face the world had folded inward — from outside it only produced static, only blurred out. But sound still leaked in. Not an image — fragmented sounds: the echo of a mirror surface cracking, the overly clean silence as a path narrowed, and at the deepest layer a stillness close to gentle, so still that it made the back of Noa's neck go cold."
  });
  setLine("afteralice-false-reboot", 17, {
    text: "...They're watching them!"
  });
  setLine("afteralice-false-reboot", 18, {
    text: "But they clearly can't see in here..."
  });
  setLine("afteralice-false-reboot", 19, {
    text: "Noa grabbed her wrist first. The hand was cold and light — as if letting go for a moment would let it keep dispersing outward. The white gap itself hadn't exposed them — but it was cutting everything happening outside into thin echoes and forcing them through this seam that hadn't had time to be completed."
  });
  setLine("afteralice-false-reboot", 20, {
    text: "We can't see outside from here. But what's being watched outside... leaks in."
  });
  setLine("afteralice-false-reboot", 21, {
    text: "She realized then: this was not one layer at a time reaching whoever was next — all three convergences were pushing forward in the same instant. The gap wasn't projecting them, only letting their channels brush against each other here. The outermost layer was like glass being slowly pressed to cracking; the middle layer was like all paths being straightened by someone; and the deepest layer was almost hypnotic, as if someone were pulling someone forward with something very fine and very gentle."
  });
  setLine("afteralice-false-reboot", 22, {
    text: "Don't be afraid. Listen clearly. Don't let them carry you."
  });
  setLine("afteralice-false-reboot", 23, {
    text: "Moel didn't turn back immediately. First she held Noa's wrist, then steered the unnamed girl through two more bends — half-dragging, half-pushing through a slanted gap as narrow as the back of a page. Only when the sounds from outside felt several layers of water away, and the white at their feet no longer rushed instantly up to close, did she finally stop. This was not safe — only temporarily too far behind to be reached. For the first time Noa felt, so clearly, that what someone had fought for on their behalf was not safety — but a few seconds of 'still time to choose.'"
  });
  setLine("afteralice-false-reboot", 24, {
    text: "I can hear them... but I can't tell which line is keeping them, and which is taking them away."
  });
  setLine("afteralice-false-reboot", 25, {
    text: "Don't separate them yet. Hold onto the most wrong one."
  });
  setLine("afteralice-false-reboot", 26, {
    text: "Noa closed her eyes and let the broken sounds pass through, layer by layer. The brittle sounds of the mirror were still outermost, the too-clean silence was caught in the middle — and the innermost layer, so light it was almost being lulled into sleep. She snapped her eyes open, and caught at last what was wrong: that was not silence. That was a fine thread already leading someone forward."
  });
  setLine("afteralice-false-reboot", 27, {
    text: "Moel. The deepest layer — Hana's side — there's a thread. She's already being pulled forward."
  });
  setLine("afteralice-false-reboot", 28, {
    text: "If we end up scattered anyway... why are you still protecting me?"
  });
  setLine("afteralice-false-reboot", 29, {
    text: "Because scattering and being completed before your time are not the same thing."
  });
  setLine("afteralice-false-reboot", 30, {
    text: "If you have to fade in the end, you should walk there yourself. Not have someone decide it for you first."
  });
  setLine("afteralice-false-reboot", 31, {
    text: "Noa instinctively opened the journal, pen hovering over the page, and wrote half a sentence: We can leave this place. The ink had barely reached 'leave' when the gap tightened one step ahead of her, as if an unseen hand had pinched the path into a narrower shape. She stopped immediately, chest catching from the pressure pushing back."
  });
  setLine("afteralice-false-reboot", 32, {
    text: "Not every path will follow your writing."
  });
  setLine("afteralice-false-reboot", 33, {
    text: "Moel — do you know we can get out?"
  });
  setLine("afteralice-false-reboot", 34, {
    text: "I don't know."
  });
  setLine("afteralice-false-reboot", 35, {
    text: "Noa hadn't expected that answer. Not 'we will,' not 'we won't' — 'I don't know.' She stared at Moel."
  });
  setLine("afteralice-false-reboot", 36, {
    text: "I know many things. But where this space goes — I don't know. No one does. This kind of thing has never announced itself in advance."
  });
  setLine("afteralice-false-reboot", 37, {
    text: "Then keep writing."
  });
  setLine("afteralice-false-reboot", 38, {
    text: "Noa stared at the half-sentence on the page, and suddenly understood: every kind of tone here would be used against you. If she wrote one more word, the convergence outside the gap would immediately follow that 'leave' and complete what came after — an exit, a direction, an arrival, and a result that would never need to hesitate again."
  });
  setLine("afteralice-false-reboot", 39, {
    text: "It's not actually helping us find a way — it's waiting for you to write the path into the shape it wants. Isn't it?"
  });
  setLine("afteralice-false-reboot", 40, {
    text: "Yes. So right now what matters more is not getting out quickly. It's making sure this path is not written into the only exit."
  });
  setLine("afteralice-false-reboot", 41, {
    text: "Moel always kept one ear outside. The three layers of white were grinding at each other's edges. The first layer was still cracking, the second was still jammed, and only the deepest layer had stayed quiet — too quiet, from start to finish. She connected that layer with Hana almost immediately. Not because she had an answer, but because she recognized that kind of quiet: not nothing happening — someone being gently taken away."
  });
  setLine("afteralice-false-reboot", 42, {
    text: "I'm going to slow down the deepest layer a little. Hana's side is already being carried by the thread. Go further in — don't look back."
  });
  setLine("afteralice-false-reboot", 43, {
    text: "Visitor still couldn't see the people inside the gap. But the channel that had been watching the three-space still broke into this seam intermittently. The more Noa heard, the more she understood why the gap was dangerous and precious at once: you could not be seen here, yet whatever was happening elsewhere briefly left its trace here in sound."
  });
  setLine("afteralice-false-reboot", 44, {
    text: "The inside of the white gap had no up or down. Or rather, it had up and down, but they switched directions every breath. Noa tried to hold the journal steady and realized her hands were shaking."
  });
  setLine("afteralice-false-reboot", 45, {
    text: "...I don't know how much longer I'm here."
  });
  setLine("afteralice-false-reboot", 46, {
    text: "I don't know either. But I don't know how long I've been here either."
  });
  setLine("afteralice-false-reboot", 47, {
    text: "Noa wrote a wrong character by mistake, and the moment the ink hit that page the space contracted once — as if something was quietly waiting for her to correct it. She crossed it out — not to be perfect, but because she'd written wrong and so she had to."
  });
  setLine("afteralice-false-reboot", 48, {
    text: "The gap's walls were not stone, and not air. She didn't know what they were. Every deep breath brought things closer, and then they retreated slightly as she breathed. Like something breathing. Like something waiting for her to give in."
  });
  setLine("afteralice-false-reboot", 49, {
    text: "Are you afraid?"
  });
  setLine("afteralice-false-reboot", 50, {
    text: "Yes. But I can be afraid and keep writing."
  });
  setLine("afteralice-false-reboot", 51, {
    text: "The unnamed girl didn't respond. She only moved forward a little, her form separated from Noa's shoulder by only the narrowest sliver. Not to carry anything for her. Only to be there. Being there was enough."
  });
  setLine("afteralice-false-reboot", 52, {
    text: "Alright. As long as they still have that little bit of time, let them speak for themselves."
  });
  setLine("afteralice-false-reboot", 53, {
    text: "Layer one lit up first. The mirror fractured like pages of records collapsing from beneath Yume's feet. The Dark Yume across from her had no anger — she only seemed to be stating an ordinary conclusion."
  });
  setLine("afteralice-false-reboot", 54, {
    text: "Redundant records should be deleted."
  });
  setLine("afteralice-false-reboot", 55, {
    text: "Why do you want these."
  });
  setLine("afteralice-false-reboot", 56, {
    text: "...I don't know. Only —"
  });
  setLine("afteralice-false-reboot", 57, {
    text: "'Don't know' does not exist. Only 'you won't admit it' exists."
  });
  setLine("afteralice-false-reboot", 58, {
    text: "That voice was not cold. It was more painful than cold — it was so clear that every feeling you had seemed like an explainable residue."
  });
  setLine("afteralice-false-reboot", 59, {
    text: "You run because stopping is more frightening. You want because you're afraid you have nothing. That is not feeling. It is proof of lack."
  });
  setLine("afteralice-false-reboot", 60, {
    text: "Yume did not answer. Because she could not refute it. For one second she nearly believed every one of those words. Nearly accepted that the things she wanted were only evidence of emptiness, not answers."
  });
  setLine("afteralice-false-reboot", 61, {
    text: "...I want to."
  });
  setLine("afteralice-false-reboot", 62, {
    text: "State the reason."
  });
  setLine("afteralice-false-reboot", 63, {
    text: "There is no reason."
  });
  setLine("afteralice-false-reboot", 64, {
    text: "Yume felt herself being peeled open layer by layer. Not destruction — annotation. Each feeling was labeled and placed into a searchable system. What she feared most was not that the other party was lying — it was that those labels might be true."
  });
  setLine("afteralice-false-reboot", 65, {
    text: "You want to run. You want to be understood. You want someone else to speak first. State them one by one — what are the reasons."
  });
  setLine("afteralice-false-reboot", 66, {
    text: "Yume did not look back at that pen — the one that had always recorded, that had always led paths toward conclusions — and then let it go. The sound it made when it fell was soft, soft as if she was not abandoning responsibility but returning the small right to 'automatic closure' to the center of the world."
  });
  setLine("afteralice-false-reboot", 67, {
    text: "I want to."
  });
  setLine("afteralice-false-reboot", 68, {
    text: "Dark Yume was not unbeautiful. She was beautiful with too much clarity — as if she had crystallized everything Yume had ever wanted to save the world from carrying. But Yume looked at her and still recognized the most fatal difference: she was too certain. The real self was not."
  });
  setLine("afteralice-false-reboot", 69, {
    text: "I want many things. But I'm not sure they all belong here. Someone who is certain before being certain — is not me."
  });
  setLine("afteralice-false-reboot", 70, {
    text: "The mirror did not recover, and it did not defeat anyone. It only stopped — as if the deletion logic that should have crashed all the way to the end was suddenly jammed for a moment by a choice that had no explanation, no reason, only 'I want to.'"
  });
  setLine("afteralice-false-reboot", 71, {
    text: "Was the outermost layer just... held down by her?"
  });
  setLine("afteralice-false-reboot", 72, {
    text: "Not stopped. Just not let to continue automatically."
  });
  setLine("afteralice-false-reboot", 73, {
    text: "After those words, Noa went quiet herself for a moment. She discovered for the first time: 'choice' doesn't always look like charging forward. Many times it looks more like, with every easier answer in front of you, pressing your own hand down first — refusing to walk the last step for anyone."
  });
  setLine("afteralice-false-reboot", 74, {
    text: "Those extra seconds... will they really matter?"
  });
  setLine("afteralice-false-reboot", 75, {
    text: "They will. As long as you still have time to speak for yourself."
  });
  setLine("afteralice-false-reboot", 76, {
    text: "All three layers had always been moving at once. Only at the moment the outermost mirror was held, the frame Visitor had pushed to the edge of the white gap suddenly slid sideways. The gaze seemed to be cut into the second layer by someone. Every diverging line gathered in the dark, as if the entire world were already picking the most stable path ahead of time."
  });
  setLine("afteralice-false-reboot", 77, {
    text: "Layer Two."
  });
  setLine("afteralice-false-reboot", 78, {
    text: "Dark Alice stood at the center of the paths, her tone steadier than reasonable."
  });
  setLine("afteralice-false-reboot", 79, {
    text: "Conclusion established."
  });
  setLine("afteralice-false-reboot", 80, {
    text: "That voice didn't wait for a reply. Before Alice could speak, it had catalogued every one of her possibilities — every possible answer already had its place."
  });
  setLine("afteralice-false-reboot", 81, {
    text: "Alice realized: if she answered, she would be classified. If she was silent, silence would be classified. This space did not permit her to exist in any state without being filed."
  });
  setLine("afteralice-false-reboot", 82, {
    text: "Emotional type. Effective processing path: compression."
  });
  setLine("afteralice-false-reboot", 83, {
    text: "The paths were narrowing. Not physically — possibility-wise. Every second, a branch closed. Alice watched those closing paths, watched them be labeled and disappear into some archive system. She knew what it meant."
  });
  setLine("afteralice-false-reboot", 84, {
    text: "Resistance type. Archive number increments."
  });
  setLine("afteralice-false-reboot", 85, {
    text: "Alice understood more than anyone: the other party was not wrong. Those paths were beautifully, neatly, efficiently compressed — as if the world, one step further, could arrange everything into the most bearable answer. But the very moment Dark Alice raised her hand to truly speak that conclusion, Alice moved."
  });
  setLine("afteralice-false-reboot", 86, {
    text: "She didn't charge. She only reached out, took hold of the other's wrist, and pressed. The motion was as light as reminding someone not to rush — yet that hand could no longer rise."
  });
  setLine("afteralice-false-reboot", 87, {
    text: "...Behavior anomalous."
  });
  setLine("afteralice-false-reboot", 88, {
    text: "Not saying."
  });
  setLine("afteralice-false-reboot", 89, {
    text: "Dark Alice's logic was sealed. It had no gaps. But Alice understood one thing: a system with no gaps is not necessarily a correct system. It is only a closed one."
  });
  setLine("afteralice-false-reboot", 90, {
    text: "I know you. You are the part of me that always wanted to classify everything into an answer as quickly as possible. But some things' first attribute is that they have no answer."
  });
  setLine("afteralice-false-reboot", 91, {
    text: "That is not an answer. That is fatigue."
  });
  setLine("afteralice-false-reboot", 92, {
    text: "That too. But fatigue is better than error."
  });
  setLine("afteralice-false-reboot", 93, {
    text: "The conclusion was stuck the moment before it took hold. But that alone was not enough. Dark Alice's gaze had no fluctuation — as if she were waiting for another equally correct output path to fill itself in. And on the other side, Moel had been heading for the third layer. She had thought she needed to get to Hana's side — the layer most dangerous in its quiet. But while she was doubling back through the three white layers, an entire closing white face slammed at her from the side. The next instant, the space lurched."
  });
  setLine("afteralice-false-reboot", 94, {
    text: "...Flying kick."
  });
  setLine("afteralice-false-reboot", 95, {
    text: "She wasn't aiming for Dark Alice. She only couldn't check her momentum — so she launched herself and, with a flying kick that was almost absurd, forced the closing white face off course. Dark Alice happened to be standing on the line where the conclusion was about to take hold, and was knocked off-position along with it, which also shook Alice back from nearly being carried by that conclusion. The motion was not elegant — nearly crude — but precisely because of that, the 'moment of taking hold' that had been airtight was kicked completely off."
  });
  setLine("afteralice-false-reboot", 96, {
    text: "Timing displaced. Path mismatch."
  });
  setLine("afteralice-false-reboot", 97, {
    text: "Her outline shivered lightly, then came apart the way pages of a catalogue placed in the wrong order come apart — frame by frame. Crown, wrists, hem, and the path that should have kept closing forward momentarily overlapped into several inconsistent versions. Dark Alice didn't fall, but she couldn't immediately continue. The hand she had raised in midair stopped — as if 'the conclusion' itself had suddenly lost the ability to know which line came next."
  });
  setLine("afteralice-false-reboot", 98, {
    text: "How did you end up here?"
  });
  setLine("afteralice-false-reboot", 99, {
    text: "...I was heading for Hana's side. I wasn't as worried about yours. Too fast."
  });
  setLine("afteralice-false-reboot", 100, {
    text: "After the second layer was slowed, the white gap shivered along with it. Noa didn't need to see all three layers clearly to know what she could do most right now: not write a correct exit for every layer — but keep the person in front of her, the one who had not yet found the words to speak, from being written into a convenient result first. She looked down at the unnamed girl. The journal pressed against her palm. For the first time she no longer rushed toward a better sentence."
  });
  setLine("afteralice-false-reboot", 101, {
    text: "If in the end I still can't say who I am?"
  });
  setLine("afteralice-false-reboot", 102, {
    text: "Then don't say yet. When you've truly thought it through some day, tell it in your own words. What matters right now is that we keep the place where you haven't said yet safe — that alone is already very important."
  });
  setLine("afteralice-false-reboot", 103, {
    text: "What if, in the end, I still can't say who I am?"
  });
  setLine("afteralice-false-reboot", 104, {
    text: "Then you don't have to say it yet. When the day comes that you've really thought it through, you can tell us yourself. For now, just holding the place of 'not yet said' is already important."
  });
  setLine("afteralice-false-reboot", 105, {
    text: "And then the deepest part — the third layer — can Hana say no for herself too?"
  });
  setLine("afteralice-false-reboot", 106, {
    text: "She can. As long as someone can win back that small piece of time for her, she'll make it in time to say it herself."
  });
  setLine("afteralice-false-reboot", 107, {
    text: "As if in answer to those words, the deepest layer — so still, so close to gentle, all along — suddenly showed its outline more clearly. No cracking, no alarm, no anything that would make you instinctively look. Only a perfection that was exactly right, exactly right enough to make you want to stop following everything along with it, waiting quietly for someone to nod."
  });

  // ─────────────────────────────────────────────
  // Chapter 06 – afteralice-do-not-complete
  // ─────────────────────────────────────────────
  setLine("afteralice-do-not-complete", 1, {
    eyebrow: "After Alice | Side Story",
    title: "Not Every Blank Needs to Be Filled",
    subtitle: "What remains in the end is not an answer — but the refusal to let the world close too soon.",
    location: "Layer Three and the World Choice Layer"
  });
  setRange("afteralice-do-not-complete", 2, 82, { speaker: "Narration" });
  setLine("afteralice-do-not-complete", 4, { speaker: "Dark Hana" });
  setLine("afteralice-do-not-complete", 5, { speaker: "Hana" });
  setLine("afteralice-do-not-complete", 6, { speaker: "Dark Hana" });
  setLine("afteralice-do-not-complete", 9, { speaker: "Dark Hana" });
  setLine("afteralice-do-not-complete", 10, { speaker: "Dark Hana" });
  setLine("afteralice-do-not-complete", 12, { speaker: "Dark Hana" });
  setLine("afteralice-do-not-complete", 14, { speaker: "Mizuki" });
  setLine("afteralice-do-not-complete", 16, { speaker: "Hana" });
  setLine("afteralice-do-not-complete", 17, { speaker: "Mizuki" });
  setLine("afteralice-do-not-complete", 18, { speaker: "Dark Hana" });
  setLine("afteralice-do-not-complete", 19, { speaker: "Dark Hana" });
  setLine("afteralice-do-not-complete", 21, { speaker: "Mizuki" });
  setLine("afteralice-do-not-complete", 22, { speaker: "Mizuki" });
  setLine("afteralice-do-not-complete", 23, { speaker: "Dark Hana" });
  setLine("afteralice-do-not-complete", 24, { speaker: "Mizuki" });
  setLine("afteralice-do-not-complete", 26, { speaker: "Dark Hana" });
  setLine("afteralice-do-not-complete", 29, { speaker: "Hana" });
  setLine("afteralice-do-not-complete", 30, { speaker: "Dark Hana" });
  setLine("afteralice-do-not-complete", 31, { speaker: "Hana" });
  setLine("afteralice-do-not-complete", 32, { speaker: "Hana" });
  setLine("afteralice-do-not-complete", 34, { speaker: "Dark Hana" });
  setLine("afteralice-do-not-complete", 35, { speaker: "Hana" });
  setLine("afteralice-do-not-complete", 36, { speaker: "Dark Hana" });
  setLine("afteralice-do-not-complete", 37, { speaker: "Hana" });
  setLine("afteralice-do-not-complete", 38, { speaker: "Hana" });
  setLine("afteralice-do-not-complete", 41, { speaker: "Hana" });
  setLine("afteralice-do-not-complete", 43, { speaker: "Mizuki" });
  setLine("afteralice-do-not-complete", 44, { speaker: "Hana" });
  setLine("afteralice-do-not-complete", 46, { speaker: "Unnamed Girl" });
  setLine("afteralice-do-not-complete", 47, { speaker: "Noa" });
  setLine("afteralice-do-not-complete", 48, { speaker: "Noa" });
  setLine("afteralice-do-not-complete", 50, { speaker: "Yume" });
  setLine("afteralice-do-not-complete", 51, { speaker: "Visitor" });
  setLine("afteralice-do-not-complete", 52, { speaker: "Alice" });
  setLine("afteralice-do-not-complete", 53, { speaker: "Hana" });
  setLine("afteralice-do-not-complete", 55, { speaker: "Visitor" });
  setLine("afteralice-do-not-complete", 56, { speaker: "Moel" });
  setLine("afteralice-do-not-complete", 58, { speaker: "Moel" });
  setLine("afteralice-do-not-complete", 60, { speaker: "World" });
  setLine("afteralice-do-not-complete", 62, { speaker: "Unnamed Girl" });
  setLine("afteralice-do-not-complete", 63, { speaker: "Noa" });

  setLine("afteralice-do-not-complete", 2, {
    text: "Layer one's mirror had collapsed. Layer two's conclusion was frozen at the moment before it took hold. Only layer three — from start to finish — had not made a single sound. No cracking, no alarm, nothing that would make you instinctively look. It only sat quiet."
  });
  setLine("afteralice-do-not-complete", 3, {
    text: "Moel recognized the shape of that quiet. It was not nothing happening. It was everything being completed, gently, and it had no intention of telling anyone."
  });
  setLine("afteralice-do-not-complete", 4, {
    text: "Hana stood at the center of that excessive stillness. No fracture here, no chaos, nothing that would make you instinctively want to flee. Only everything placed into its 'exactly right' position. Her wrists, her ankles, the space behind her — all held by fine threads. Those threads did not pull tight; instead they led her gently forward, as if someone were guiding her with the tenderest possible force."
  });
  setLine("afteralice-do-not-complete", 5, {
    text: "Like this, it won't hurt anymore."
  });
  setLine("afteralice-do-not-complete", 6, {
    text: "...Will it really be easier?"
  });
  setLine("afteralice-do-not-complete", 7, {
    text: "It will. They will stop."
  });
  setLine("afteralice-do-not-complete", 8, {
    text: "Not healing. Not being held, not finally not having the nightmares. Only stop. Hana looked down at those threads, and truly thought for a moment. Not because she was weak — because the words were dangerously tender, tender enough to look like a clean exit for every wound."
  });
  setLine("afteralice-do-not-complete", 9, {
    text: "Do you remember the time Yume stepped away from everyone. You didn't know whether to follow. You stood in place, holding a spot. You couldn't ask. That feeling stayed for a long time."
  });
  setLine("afteralice-do-not-complete", 10, {
    text: "Alice was speaking and then stopped mid-sentence, and you didn't know if you'd said something wrong. You couldn't ask. That kind of feeling — you kept it, one piece at a time, like pressed leaves."
  });
  setLine("afteralice-do-not-complete", 11, {
    text: "Hana didn't deny any of it. Those things had happened. She had kept them in a corner of herself, exactly like that — one piece at a time."
  });
  setLine("afteralice-do-not-complete", 12, {
    text: "I won't make you forget. Only let them stop pressing on you."
  });
  setLine("afteralice-do-not-complete", 13, {
    text: "Hana wanted to say that was not a solution. But she found she didn't know how to say it clearly. In that moment, she was very close to following along. Not because she was forced — because that direction was genuinely easier."
  });
  setLine("afteralice-do-not-complete", 14, {
    text: "The space was cut open just then. Not an explosion, not the grand violence of a sky tearing — only an extremely straight, extremely cold line slicing open the 'exactly right' from the side. Mizuki stepped out of that crack — rabbit ears back, silver sword in hand — and without pausing stepped directly between the two of them."
  });
  setLine("afteralice-do-not-complete", 15, {
    text: "Hana."
  });
  setLine("afteralice-do-not-complete", 16, {
    text: "...Mizuki? Why are you here... your rabbit ears, why..."
  });
  setLine("afteralice-do-not-complete", 17, {
    text: "I didn't want to be one step late again. So I came."
  });
  setLine("afteralice-do-not-complete", 18, {
    text: "Define. Explain. Define... explain..."
  });
  setLine("afteralice-do-not-complete", 19, {
    text: "Sister. Little sister. Please give the answer."
  });
  setLine("afteralice-do-not-complete", 20, {
    text: "No one responded. Dark Yume and Dark Alice were both absent from this layer. For the first time, the third space produced an extremely brief, very visible pause. As if even this logic of 'completing everything gently' had to wait for other answers to fill themselves in."
  });
  setLine("afteralice-do-not-complete", 21, {
    text: "What are you thinking."
  });
  setLine("afteralice-do-not-complete", 22, {
    text: "Are you about to be taken away?"
  });
  setLine("afteralice-do-not-complete", 23, {
    text: "She will be lighter."
  });
  setLine("afteralice-do-not-complete", 24, {
    text: "That is not her."
  });
  setLine("afteralice-do-not-complete", 25, {
    text: "Hana lifted her head and looked at Mizuki, standing in front of her. The surprise hadn't fully left her eyes — yet the clarity that had been long overdue, finally being pulled up hard by someone's hand, surfaced first. She spoke very softly, but the tone left no room for discussion."
  });
  setLine("afteralice-do-not-complete", 26, {
    text: "Step back."
  });
  setLine("afteralice-do-not-complete", 27, {
    text: "Mizuki paused, then truly stepped back one step. She didn't leave — only returned the decision to Hana. The one who had needed protecting most was now, in this moment, as if she had finally stepped back into her own body."
  });
  setLine("afteralice-do-not-complete", 28, {
    text: "You can end all of this."
  });
  setLine("afteralice-do-not-complete", 29, {
    text: "Hana didn't move right away. She stood there, feeling how the space was arranged around her — not surrounding, not enveloping, only existing, waiting for her to tell it the next step."
  });
  setLine("afteralice-do-not-complete", 30, {
    text: "She thought of the puzzle in the Unnamed Domain, missing three pieces from the upper left. Missing — incomplete. But that didn't stop it from being a puzzle. Only stopped it from being declared finished."
  });
  setLine("afteralice-do-not-complete", 31, {
    text: "...I can still hurt."
  });
  setLine("afteralice-do-not-complete", 32, {
    text: "That's not freedom. That's just stubbornness."
  });
  setLine("afteralice-do-not-complete", 33, {
    text: "Maybe. But it's mine."
  });
  setLine("afteralice-do-not-complete", 34, {
    text: "Hana walked forward and stood facing her. She didn't look at the threads that had already disappeared, didn't turn to find courage from anyone. She only looked for a long time at the face that resembled her own — the face better suited to being adopted by the world — and then said what she'd chosen."
  });
  setLine("afteralice-do-not-complete", 35, {
    text: "Dark Hana said nothing. She moved forward one step. Not attack, not argument — only slowly raising a hand toward Hana's face. In that motion there was a certainty without any malice: she believed this was an ending."
  });
  setLine("afteralice-do-not-complete", 36, {
    text: "Ending it sooner means not having to hurt anymore. That was her logic — close all the unfinished circuits with one motion, so Hana no longer needed to choose. She was not malicious. She was wrong in thinking she had that right."
  });
  setLine("afteralice-do-not-complete", 37, {
    text: "I don't want to."
  });
  setLine("afteralice-do-not-complete", 38, {
    text: "You're choosing to let them keep hurting."
  });
  setLine("afteralice-do-not-complete", 39, {
    text: "That is theirs."
  });
  setLine("afteralice-do-not-complete", 40, {
    text: "Not every blank needs to be filled."
  });
  setLine("afteralice-do-not-complete", 41, {
    text: "After she said it, the space didn't respond immediately. Hana didn't continue speaking. She only stood there watching Dark Hana's outline thin little by little — not waiting for the other to disappear, but confirming whether the sentence she had just spoken was also heard by herself."
  });
  setLine("afteralice-do-not-complete", 42, {
    text: "...Thank you."
  });
  setLine("afteralice-do-not-complete", 43, {
    text: "Dark Hana didn't answer. Or rather: the answer was the process of her gradually thinning. She had only been trying not to let Hana hurt. The method was wrong. But that was everything she could do."
  });
  setLine("afteralice-do-not-complete", 44, {
    text: "Dark Hana didn't argue. She didn't disappear. She only gradually thinned — not like being defeated, more like realizing she had been standing in the wrong story."
  });
  setLine("afteralice-do-not-complete", 45, {
    text: "Are you all right."
  });
  setLine("afteralice-do-not-complete", 46, {
    text: "Not really. But that's fine."
  });
  setLine("afteralice-do-not-complete", 47, {
    text: "The space returned to an ordinary size. Still white. But now it held the shape of Hana's choice, no longer a container waiting to be filled."
  });
  setLine("afteralice-do-not-complete", 48, {
    text: "At the very moment all three layers stopped at once, Dark Yume and Dark Alice also lost the timing to keep pushing. Layer one's mirror had never recovered; Dark Yume stood in the fragments, like a system so awake it had finally met an input it could not classify. Layer two's timing was still off — the moment Dark Alice had been kicked sideways never corrected. Neither was destroyed. They only couldn't find the position to step in and complete someone's conclusion anymore."
  });
  setLine("afteralice-do-not-complete", 49, {
    text: "When the white layer withdrew to its thinnest, all the partitions lost effect. The original three sisters, the Dark Triad, Moel, Noa, the unnamed girl, and the Visitor who had been searching for them from outside — for the first time stood in the same layer of space. No one had invited anyone. Only whatever had been concealing them was gone."
  });
  setLine("afteralice-do-not-complete", 50, {
    text: "You only changed 'perfect' to another word. And 'imperfect' too, into another word."
  });
  setLine("afteralice-do-not-complete", 51, {
    text: "We chose which imperfect."
  });
  setLine("afteralice-do-not-complete", 52, {
    text: "Does that distinction matter?"
  });
  setLine("afteralice-do-not-complete", 53, {
    text: "It is the only distinction that matters."
  });
  setLine("afteralice-do-not-complete", 54, {
    text: "We didn't say what was correct. We only said what was ours."
  });
  setLine("afteralice-do-not-complete", 55, {
    text: "Visitor paused, as if weighing something — or as if waiting for the world to answer on its behalf. But no one filled anything into any conclusion."
  });
  setLine("afteralice-do-not-complete", 56, {
    text: "You know this won't end."
  });
  setLine("afteralice-do-not-complete", 57, {
    text: "We know. That's why we haven't announced an ending."
  });
  setLine("afteralice-do-not-complete", 58, {
    text: "The wind blew through. No one answered immediately. The original three sisters and the Dark Triad existed at no great distance from each other; no one stepped forward, no one was declared the cleverer answer. The world seemed to be waiting for an explanation."
  });
  setLine("afteralice-do-not-complete", 59, {
    text: "What you just said — that, too."
  });
  setLine("afteralice-do-not-complete", 60, {
    text: "The choice panel appeared. In this moment, the world seemed to be waiting for someone to complete the answer on their behalf. But that place — does not belong to you."
  });
  setLine("afteralice-do-not-complete", 61, {
    text: "Visitor said nothing further. One more word would only be another explanation. What finally sounded first was not a command, not a verdict — more like the world itself giving a low, quiet confirmation of the present state."
  });
  setLine("afteralice-do-not-complete", 62, {
    text: "Unfinished."
  });
  setLine("afteralice-do-not-complete", 63, {
    text: "After those two words fell, the world did not push forward at once. As if even it needed a little time — to adjust to the fact that 'not being completed' could actually be true. The wind was still there, the white was still there, but every structure that had been ready to close automatically stopped where it was. Not a failure, not a withdrawal. Only for the first time — it did not take the last step on anyone's behalf."
  });
  setLine("afteralice-do-not-complete", 64, {
    text: "That quiet was not easy. It was more like someone finally let out a breath they had been holding a long time, and the white around them breathed out one small real space at last. Noa looked down: the unnamed girl's outline was still trembling lightly, but no longer sinking toward 'a more stable shape.' As if the world hadn't accepted her yet — but had at least paused on pressing her flat any further."
  });
  setLine("afteralice-do-not-complete", 65, {
    text: "The white layer withdrew slowly, and the sound of the tide returned. The 'go see the sea' fragment that Noa had written at the very beginning — pushed far off course by sideways slides and rewrites — finally revealed its original direction again. Not a victory reward, not a result anyone had given them. Only that path, not until now, being given back beneath their feet."
  });
  setLine("afteralice-do-not-complete", 66, {
    text: "Noa didn't walk forward right away. She first looked at the unnamed girl beside her — confirming that this newly reopened path wouldn't split them into someone sent ahead and someone left behind. The unnamed girl looked back at her. Still a little panic in her eyes — not fully retreated — but something else had begun there: no longer 'will I be permitted' but 'is this path now mine to walk myself too.'"
  });
  setLine("afteralice-do-not-complete", 67, {
    text: "Is this path... chosen for us by someone?"
  });
  setLine("afteralice-do-not-complete", 68, {
    text: "No. It was only finally not closed by someone ahead of time. How we walk the rest — we still have to move forward ourselves."
  });
  setLine("afteralice-do-not-complete", 69, {
    text: "They will continue."
  });
  setLine("afteralice-do-not-complete", 70, {
    text: "On their own paths."
  });
  setLine("afteralice-do-not-complete", 71, {
    text: "Us too."
  });
  // Choice + aftermath (entries 69-82)
  setLine("afteralice-do-not-complete", 69, {
    speaker: "Narration",
    location: "World Choice Layer",
    text: "For that one moment, it was as if the world were waiting for someone to speak the answer on their behalf. But that position — it did not belong to you.",
    options: [
      {
        id: "keep-them",
        label: "Let them stay.",
        note: "Decide for them",
        result: "trap",
        trapMessage: "This is your choice. Not theirs.",
        traceText: "Convergence complete"
      },
      {
        id: "end-them",
        label: "Let them end.",
        note: "End for them",
        result: "trap",
        trapMessage: "This is your choice. Not theirs.",
        traceText: "Convergence complete"
      },
      {
        id: "let-them-choose",
        label: "I won't choose. Let them decide.",
        note: "Move forward",
        result: "continue"
      }
    ]
  });
  setLine("afteralice-do-not-complete", 70, {
    speaker: "Narration",
    location: "World Choice Layer",
    text: "Visitor said nothing more. One more word would only have been another explanation. What sounded first in the end was not a command, not a verdict — more like the world itself, very softly, confirming the state of this moment."
  });
  setLine("afteralice-do-not-complete", 71, {
    speaker: "World",
    location: "World Choice Layer",
    text: "Unfinished."
  });
  setLine("afteralice-do-not-complete", 72, {
    speaker: "Narration",
    location: "World Choice Layer",
    text: "After those two words fell, the world did not push forward at once. As if even it needed a moment — to adjust to the fact that 'left unfinished' could actually hold. The wind was still there, the white layer still there, yet every structure that had been ready to close automatically stopped where it was. Not a failure, not a withdrawal. Only, for the first time, no one had taken the last step on anyone else's behalf."
  });
  setLine("afteralice-do-not-complete", 73, {
    speaker: "Narration",
    location: "World Choice Layer",
    text: "That quiet was not easy. It felt more like someone had finally let out a breath held too long, and the white around them breathed open a little in return — a place that could truly breathe. When Noa looked down, she found the unnamed girl's outline still trembling faintly, yet no longer falling toward a 'more settled version of herself.' As if the world, though it had not yet accepted her, had at least paused its grinding."
  });
  setLine("afteralice-do-not-complete", 74, {
    speaker: "Narration",
    location: "The Reopened Path",
    text: "The white layer slowly drew back, and the sound of tide returned. The thread Noa had first written — 'go see the sea' — pulled far away by detours and rewrites all this time, finally showed its original direction again. Not a victory reward. Not something granted by anyone. Just that path, returned at last to beneath their feet."
  });
  setLine("afteralice-do-not-complete", 75, {
    speaker: "Narration",
    location: "The Reopened Path",
    text: "Noa did not walk forward at once. She looked first at the unnamed girl beside her — as if confirming that this newly opened path would not again split them into whoever was sent ahead and whoever was left behind. The unnamed girl looked back at her, a trace of fear not yet fully gone from her eyes, yet something else had finally begun to appear there: not 'will I be allowed' — but 'is this path now also mine to walk.'"
  });
  setLine("afteralice-do-not-complete", 76, {
    speaker: "Unnamed Girl",
    location: "The Reopened Path",
    text: "This path now... it wasn't chosen for us by someone, was it?"
  });
  setLine("afteralice-do-not-complete", 77, {
    speaker: "Noa",
    location: "The Reopened Path",
    text: "No. It just finally wasn't closed by anyone first. How the rest is walked — that's still ours to do."
  });
  setLine("afteralice-do-not-complete", 78, {
    speaker: "Yume",
    location: "The Reopened Path",
    text: "They will continue."
  });
  setLine("afteralice-do-not-complete", 79, {
    speaker: "Alice",
    location: "The Reopened Path",
    text: "In their own paths."
  });
  setLine("afteralice-do-not-complete", 80, {
    speaker: "Hana",
    location: "The Reopened Path",
    text: "Us too."
  });
  setLine("afteralice-do-not-complete", 81, {
    speaker: "Narration",
    location: "The Return Path",
    text: "Mizuki said nothing. She stood in the back watching ahead, as if she had always been there, and as if she had never planned to stay. Only this time — she also walked a stretch of the return path."
  });
  setLine("afteralice-do-not-complete", 82, {
    speaker: "Narration",
    location: "The Return Path",
    text: "The unnamed girl also said nothing. She tilted her face at just the angle where she could be noticed, and confirmed Noa was still there."
  });

  // ─────────────────────────────────────────────
  // Chapter 07 – afteralice-go-out-after-waking
  // ─────────────────────────────────────────────
  setLine("afteralice-go-out-after-waking", 1, {
    eyebrow: "After Alice | Side Story",
    title: "The Sea Will Remember Them",
    subtitle: "The world is not finished. But it can continue.",
    location: "The Shore and the Garden"
  });
  setRange("afteralice-go-out-after-waking", 2, 75, { speaker: "Narration" });
  setLine("afteralice-go-out-after-waking", 4, { speaker: "Hana" });
  setLine("afteralice-go-out-after-waking", 6, { speaker: "Yume" });
  setLine("afteralice-go-out-after-waking", 8, { speaker: "Alice" });
  setLine("afteralice-go-out-after-waking", 10, { speaker: "Unnamed Girl" });
  setLine("afteralice-go-out-after-waking", 11, { speaker: "Noa" });
  setLine("afteralice-go-out-after-waking", 12, { speaker: "Unnamed Girl" });
  setLine("afteralice-go-out-after-waking", 13, { speaker: "Yume" });
  setLine("afteralice-go-out-after-waking", 14, { speaker: "Unnamed Girl" });
  setLine("afteralice-go-out-after-waking", 16, { speaker: "Unnamed Girl" });
  setLine("afteralice-go-out-after-waking", 17, { speaker: "Mizuki" });
  setLine("afteralice-go-out-after-waking", 18, { speaker: "Unnamed Girl" });
  setLine("afteralice-go-out-after-waking", 19, { speaker: "Mizuki" });
  setLine("afteralice-go-out-after-waking", 21, { speaker: "Hana" });
  setLine("afteralice-go-out-after-waking", 22, { speaker: "Hana" });
  setLine("afteralice-go-out-after-waking", 23, { speaker: "Mizuki" });
  setLine("afteralice-go-out-after-waking", 24, { speaker: "Hana" });
  setLine("afteralice-go-out-after-waking", 25, { speaker: "Mizuki" });
  setLine("afteralice-go-out-after-waking", 28, { speaker: "Unnamed Girl" });
  setLine("afteralice-go-out-after-waking", 29, { speaker: "Noa" });
  setLine("afteralice-go-out-after-waking", 30, { speaker: "Moel" });
  setLine("afteralice-go-out-after-waking", 31, { speaker: "Moel" });
  setLine("afteralice-go-out-after-waking", 32, { speaker: "Noa" });
  setLine("afteralice-go-out-after-waking", 34, { speaker: "Noa" });
  setLine("afteralice-go-out-after-waking", 35, { speaker: "Moel" });
  setLine("afteralice-go-out-after-waking", 36, { speaker: "Noa" });
  setLine("afteralice-go-out-after-waking", 37, { speaker: "Moel" });
  setLine("afteralice-go-out-after-waking", 38, { speaker: "Noa" });
  setLine("afteralice-go-out-after-waking", 41, { speaker: "Noa" });
  setLine("afteralice-go-out-after-waking", 42, { speaker: "Hana" });
  setLine("afteralice-go-out-after-waking", 43, { speaker: "Yume" });
  setLine("afteralice-go-out-after-waking", 44, { speaker: "Alice" });
  setLine("afteralice-go-out-after-waking", 46, { speaker: "Hana" });
  setLine("afteralice-go-out-after-waking", 47, { speaker: "Unnamed Girl" });
  setLine("afteralice-go-out-after-waking", 48, { speaker: "Hana" });
  setLine("afteralice-go-out-after-waking", 50, { speaker: "Moel" });
  setLine("afteralice-go-out-after-waking", 51, { speaker: "Noa" });
  setLine("afteralice-go-out-after-waking", 53, { speaker: "Yume" });
  setLine("afteralice-go-out-after-waking", 54, { speaker: "Alice" });
  setLine("afteralice-go-out-after-waking", 55, { speaker: "Hana" });

  setLine("afteralice-go-out-after-waking", 2, {
    text: "After the Dark Triad retreated, the 'go see the sea' fragment that had been written down at the very start finally revealed its original direction again. This time it didn't slide sideways, and no one rewrote it midway. The tide came back first, then the salt, the sea wind, and far away a line of water lit bright by the evening light. As if that future had not failed to happen — only that, not until now, had they walked step by step to it."
  });
  setLine("afteralice-go-out-after-waking", 3, {
    text: "No one ran ahead. They all walked slower than when they'd set out. As if this road had come close to losing its footing so many times that when they truly returned to the original path, no one rushed to prove it had worked with cheering. They only kept walking forward, very seriously — as if finally willing to place their whole bodies into this long-overdue afterward."
  });
  setLine("afteralice-go-out-after-waking", 4, {
    text: "The sea was really there. No miraculous light, no ending prepared for anyone. Only the waves, one after another, calm enough to be almost ordinary. Precisely because of that, it was more real than any elevated image could be. When Noa stopped, she even felt, first, a sting at the back of her nose. She suddenly understood: what she had truly protected all this way was not a victory — but that this sea could, in the end, be seen as a sea."
  });
  setLine("afteralice-go-out-after-waking", 5, {
    text: "A little deeper in the water, something transparent seemed to drift slowly past. It didn't float up, didn't shine bright enough to be pointed at and named as some kind of reply. The waves kept pushing close and retreating as usual — and so in the end, no one truly saw it."
  });
  setLine("afteralice-go-out-after-waking", 6, {
    text: "So the sound of the sea really is lighter than you imagine."
  });
  setLine("afteralice-go-out-after-waking", 7, {
    text: "After she said it, she slowly crouched and reached her hand into the water. The wave only touched her fingertips lightly and pulled back — as if it also knew how hard this road had been. Noa watched that gesture, and for the first time felt it so directly: even if in the end they return to something faint as an echo, this moment is already enough to feel like being alive."
  });
  setLine("afteralice-go-out-after-waking", 8, {
    text: "It stays longer than words."
  });
  setLine("afteralice-go-out-after-waking", 9, {
    text: "Yume watched the tide push her reflection apart and then piece it back together. She didn't open her notebook, didn't try to condense this stretch of sea-sound into some more preservable format. As if in this moment, she finally allowed herself only to be 'someone who is here,' and not the one who always needs to leave something behind for later."
  });
  setLine("afteralice-go-out-after-waking", 10, {
    text: "This stretch already stands."
  });
  setLine("afteralice-go-out-after-waking", 11, {
    text: "After Alice said it, she didn't complete the line with a conclusion. She only stood in the wind and watched the waves push the marks left in the sand flat again, little by little. As if she finally accepted, too: some fragments stand — not because someone judged them beautifully, but because they were truly walked through."
  });
  setLine("afteralice-go-out-after-waking", 12, {
    text: "So it really does get there."
  });
  setLine("afteralice-go-out-after-waking", 13, {
    text: "Yes. Not because I wrote it right. Because none of us wrote it complete — that's how we got here."
  });
  setLine("afteralice-go-out-after-waking", 14, {
    text: "Why does the sea keep moving and still always be called the sea?"
  });
  setLine("afteralice-go-out-after-waking", 15, {
    text: "You asked that once, at the platform."
  });
  setLine("afteralice-go-out-after-waking", 16, {
    text: "...Right. But then I hadn't yet stood inside it."
  });
  setLine("afteralice-go-out-after-waking", 17, {
    text: "The unnamed girl said it and then laughed very lightly. The smile wasn't wide — like someone who had only just started learning that 'not yet written full' doesn't mean you can be erased at any moment, allowing herself, for the first time, to believe. She looked down at her own footprints being gently carried shallower by the waves, and no longer felt afraid of that kind of fading."
  });
  setLine("afteralice-go-out-after-waking", 18, {
    text: "Mizuki stood a little further apart. The sea wind lifted the edges of her coat very lightly; she still had that manner — as if she had been there keeping a position safe for everyone all along, ready to step forward first if something drew close again."
  });
  setLine("afteralice-go-out-after-waking", 19, {
    text: "You're not with them."
  });
  setLine("afteralice-go-out-after-waking", 20, {
    text: "I am with them. Only not required to be pressed right up against."
  });
  setLine("afteralice-go-out-after-waking", 21, {
    text: "Does the sea remember them?"
  });
  setLine("afteralice-go-out-after-waking", 22, {
    text: "The sea remembers. That's just it."
  });
  setLine("afteralice-go-out-after-waking", 23, {
    text: "Noa and the unnamed girl also turned to look, following the voice. The sea wind lifted the edges of Mizuki's new outfit lightly — that clearly battle-ready black fabric and metal trim, strangely still here, like protection from a battle already over but not yet fully retreated."
  });
  setLine("afteralice-go-out-after-waking", 24, {
    text: "That outfit looks amazing."
  });
  setLine("afteralice-go-out-after-waking", 25, {
    text: "Mizuki — what kind of outfit is that?"
  });
  setLine("afteralice-go-out-after-waking", 26, {
    text: "I suddenly felt like you were going to disappear, so I appeared."
  });
  setLine("afteralice-go-out-after-waking", 27, {
    text: "The rabbit ears... they came back too."
  });
  setLine("afteralice-go-out-after-waking", 28, {
    text: "Yes. They came back along with everything else."
  });
  setLine("afteralice-go-out-after-waking", 29, {
    text: "Mizuki stood in the back the whole time. She said nothing — only watched the sea. When the wind passed her, the rabbit ears swayed once, then went still. She had already completed her part, so she no longer needed more words to press this scene down heavier. But Noa still looked back at her once on instinct, and understood in that glance: some people don't stand there to leave a conclusion — only to make sure others have time to choose."
  });
  setLine("afteralice-go-out-after-waking", 30, {
    text: "In the small stretch of time that followed, things felt more ordinary than expected. Hana would crouch at the waterline and test again and again whether the sea was cold; Yume would watch the waves in silence; Alice would occasionally look out to the distance, as if confirming this path didn't need to be trimmed to a single route by someone ahead of time; and Moel lazily brought up the rear, as if she herself hadn't been sure this sea would actually be reached, but now that it had, she was willing to stay and help them live out even this ordinary stretch."
  });
  setLine("afteralice-go-out-after-waking", 31, {
    text: "Later, Noa walked alone a few steps closer to the water. She didn't flip open the journal and didn't check whether that 'I want us to go to the sea together' had finally taken full hold. She only stood there, letting the sea wind tangle her skirt, knowing for the first time — without writing anything — very stably: a stretch of future had truly been walked by all of them."
  });
  setLine("afteralice-go-out-after-waking", 32, {
    text: "So getting here doesn't make you suddenly complete all at once."
  });
  setLine("afteralice-go-out-after-waking", 33, {
    text: "It doesn't. It only lets you know: you can actually get here."
  });
  setLine("afteralice-go-out-after-waking", 34, {
    text: "Now you know — writing it down isn't to make the world obey. Just to not lose the places you want to go, too early."
  });
  setLine("afteralice-go-out-after-waking", 35, {
    text: "Next time, don't only let me be the one taking new people out."
  });
  setLine("afteralice-go-out-after-waking", 36, {
    text: "That... 'flying kick' — what does that mean?"
  });
  setLine("afteralice-go-out-after-waking", 37, {
    text: "I hear it's a famous flying kick. As for exactly what — figure it out yourselves."
  });
  setLine("afteralice-go-out-after-waking", 38, {
    text: "When she said it, she wasn't reaching out to catch the several outlines that had already begun to grow lighter and lighter. As if she had always known: what can truly accompany you further is not keeping someone pinned in their most visible position — it's letting them, when it's time to fade back, still have a stretch of road that was walked together to look back on. Noa listened to those words that sounded like a joke, and understood it more clearly: 'taking everyone out for a day' had always had, hidden inside, an extremely restrained tenderness."
  });
  setLine("afteralice-go-out-after-waking", 39, {
    text: "So going back doesn't erase what just happened."
  });
  setLine("afteralice-go-out-after-waking", 40, {
    text: "It doesn't. As long as it truly happened, it won't become false just because we return."
  });
  setLine("afteralice-go-out-after-waking", 41, {
    text: "Moel and Noa walked a little behind the others. Not because anyone was tired — only both of them had something a little like things to say, and neither was in a rush to be first."
  });
  setLine("afteralice-go-out-after-waking", 42, {
    text: "Do you remember how she spoke, the very first time."
  });
  setLine("afteralice-go-out-after-waking", 43, {
    text: "She pressed a button for herself — one no one had ever chosen for her."
  });
  setLine("afteralice-go-out-after-waking", 44, {
    text: "I thought right then — any decision should count. However small."
  });
  setLine("afteralice-go-out-after-waking", 45, {
    text: "You remembered her."
  });
  setLine("afteralice-go-out-after-waking", 46, {
    text: "In the journal too. But not just as a record — that feeling is still there."
  });
  setLine("afteralice-go-out-after-waking", 47, {
    text: "After returning to the garden, the garden didn't demand an immediate account of what had happened outside. The fountain, the long table, the flower bed, and the colonnades all stayed where they were — a place that would not force you to report at once. What had truly changed was not something new the garden possessed, but that Noa, for the first time, held one thing steadily inside: after the dream wakes, you can truly walk outward."
  });
  setLine("afteralice-go-out-after-waking", 48, {
    text: "On the other side of the long table, Azalea, Meiling, and Shella were still in the garden — quiet as if they had never pushed any of them to speak up along the way. When Noa's gaze passed over them, she suddenly noticed that none of them had rabbit ears anymore. No one brought it up, the wind didn't explain for anyone — as if the garden had only left that quietly for some day in the future."
  });
  setLine("afteralice-go-out-after-waking", 49, {
    text: "The three sisters also naturally began to grow lighter again. Not suddenly disappearing — more like fading back, little by little in the wind, toward the way of existing that suited each of them better. Noa was no longer panicked the way she had been at the very start. She was beginning to understand: being half-present doesn't necessarily mean leaving. Some presences only change back to a shape more suitable for themselves — and are not gone."
  });
  setLine("afteralice-go-out-after-waking", 50, {
    text: "The unnamed girl didn't follow into the garden as a permanent presence. More accurately: she only left a very light trace — like a small extra white in the wind, or a little extra unwritten margin at the edge of a page. Not enough to constitute a person, but enough to be the seed of a second trip out."
  });
  setLine("afteralice-go-out-after-waking", 51, {
    text: "Next time, if we can go out again... I want to let her decide first which side she wants to stand on."
  });
  setLine("afteralice-go-out-after-waking", 52, {
    text: "You've already learned it this time. Next time you'll only be steadier."
  });
  setLine("afteralice-go-out-after-waking", 53, {
    text: "When the wind circled past the fountain again, the three sisters faded a little more. But that time, Noa didn't reach out to stop them, and didn't rush to write a new wish. She only stood in place, very quietly watching them thin back like a tide retreating to its own deeper places — yet still leaving this whole sea-road steady in her heart."
  });
  setLine("afteralice-go-out-after-waking", 54, {
    text: "Next time, if there's somewhere you want to go... write it a little more slowly."
  });
  setLine("afteralice-go-out-after-waking", 55, {
    text: "Don't rush to write it as an answer."
  });
  setLine("afteralice-go-out-after-waking", 56, {
    text: "If you really want to go, you'll get there, slowly."
  });
  setLine("afteralice-go-out-after-waking", 57, {
    text: "All three lines were light — not like advice, more like each of them, as they shifted back to half-present, happened to press something of their own into Noa's hands. Not to choose her path for her later — but to let her remember: some futures are worth being walked toward a little more slowly."
  });
  setLine("afteralice-go-out-after-waking", 58, {
    text: "Noa actually did, for a moment, want to call out and stop them. Not to force anyone to stay — only that she suddenly didn't want to let go, didn't want them to retreat back into the wind so quickly. But that impulse had barely risen before she pressed it back herself. She already knew: real company isn't keeping someone in the most visible position for yourself — it's letting them continue to exist in the way that suits them."
  });
  setLine("afteralice-go-out-after-waking", 59, {
    text: "It's fine to want to watch a little longer. Just don't rush to write them heavy again."
  });
  setLine("afteralice-go-out-after-waking", 60, {
    text: "I know. Like this... is still being together."
  });
  setLine("afteralice-go-out-after-waking", 61, {
    text: "The unnamed girl didn't follow through the garden's gate. She stopped at the entrance, separated from everyone by a small distance — as if she were calculating a point that could be seen without taking up a position."
  });
  setLine("afteralice-go-out-after-waking", 62, {
    text: "You're not coming in?"
  });
  setLine("afteralice-go-out-after-waking", 63, {
    text: "Here is fine for me."
  });
  setLine("afteralice-go-out-after-waking", 64, {
    text: "Okay."
  });
  setLine("afteralice-go-out-after-waking", 65, {
    text: "No one said anything more. The unnamed girl stood at the garden entrance. She watched the backs of everyone going in, until the garden gently closed. Then she turned. She knew how to find her way back."
  });
  setLine("afteralice-go-out-after-waking", 66, {
    text: "After the corridor went quiet again, Noa slowly smoothed out the aquarium flyer in her palm. The corner had picked up a very faint trace of tide — as if the sea had not truly gone far. She didn't tuck it back to its original page. She placed it a little further into the journal — as if acknowledging in her heart: this flyer no longer only belongs to the past. It has also begun to belong to what came after."
  });
  setLine("afteralice-go-out-after-waking", 67, {
    text: "...Did you hear anything?"
  });
  setLine("afteralice-go-out-after-waking", 68, {
    text: "No. What is it."
  });
  setLine("afteralice-go-out-after-waking", 69, {
    text: "I thought I heard something. Not sure. Probably the wind."
  });
  setLine("afteralice-go-out-after-waking", 70, {
    text: "No train. There shouldn't be. But Noa took out the little aquarium flyer and turned it to the back, looking for a long time. The words 'Arriving Soon' had always been there. The train had never come — but 'soon' had never been taken back either."
  });
  setLine("afteralice-go-out-after-waking", 71, {
    text: "Later that night, Noa opened the journal alone. The page with 'I want us to go to the sea together' had not been filled in, and no passage had appeared after it with someone finishing it for her. But along the edge of the page was a very faint, very light trace of damp — as if the sea, without her noticing, had left 'this really happened' behind on its own."
  });
  setLine("afteralice-go-out-after-waking", 72, {
    text: "That was not something she had written, and was not something her ability had automatically completed. Only a fragment truly walked through — which, before leaving, had given her a trace worth remembering. Noa touched it lightly with her fingertip. She didn't erase it, and didn't add a next conclusion. She only slowly closed the journal — as if she had finally learned: the best shape for some futures to be left in is right there, 'already happened, but not yet written to death.'"
  });
  setLine("afteralice-go-out-after-waking", 73, {
    text: "After she closed the journal, she didn't stand right away. The sea-water trace was there. The flyer was there. The journal was still there. That was already enough. When the wind came lightly through the window, she even felt for a moment that the unnamed girl might be somewhere not yet written full, slowly learning, still very slowly, how to stay. That thought did not make her sad — it was more like a small, steady piece of light."
  });
  setLine("afteralice-go-out-after-waking", 74, {
    text: "The choice has not ended."
  });
  setLine("afteralice-go-out-after-waking", 75, {
    text: "It only — continued."
  });

  const locationMap = {
    // Chapter 01 – The Garden After Alice
    "梦醒后的庭院":   "The Garden After Alice",
    "喷泉边":         "By the Fountain",
    "花圃前":         "Before the Flower Bed",
    "回廊口":         "At the Colonnade Entrance",
    "边界小路":       "The Boundary Path",
    "边界尽头":       "The End of the Boundary",
    "长桌尽头":       "The Far End of the Long Table",
    // Chapter 02 – The Edge Station
    "月台入口":       "Platform Entrance",
    "月台内侧":       "Inside the Platform",
    "空白站台外缘":   "Outer Edge of the Blank Platform",
    "站台内牵":       "Inside the Platform",
    "边缘站台":       "The Edge Station",
    "候车角":         "Waiting Corner",
    "长椅边":         "By the Bench",
    // Chapter 03 – Deep in the Blank Platform
    "候车室门口":     "Waiting Room Entrance",
    "候车室内深处":   "Deep Inside the Waiting Room",
    "站牌下":         "Beneath the Platform Sign",
    "长椅前":         "Before the Bench",
    "长椅区":         "The Bench Area",
    "长椅区旁的小卖机": "Vending Machine by the Benches",
    "长椅深处":       "The Far End of the Bench",
    "空白站台深处":   "Deep in the Blank Platform",
    // Chapter 04 – Unnamed Domain
    "未命名域":       "Unnamed Domain",
    "无名回廊":       "The Nameless Corridor",
    "回廊最深处":     "The Deepest Part of the Corridor",
    "白缝入口":       "The White Fissure Entrance",
    "残留区域":       "Residual Zone",
    // Chapter 05 – The Triple Convergence Space
    "三重收束空间":       "The Triple Convergence Space",
    "第一空间":           "First Space",
    "第二空间":           "Second Space",
    "白缝内部":           "Inside the White Fissure",
    "白缝边缘":           "White Fissure Edge",
    "白缝与第三空间之间": "Between the White Fissure and Third Space",
    // Chapter 06 – Layer Three and the World Choice Layer
    "第三空间":           "Third Space",
    "第三空间外缘":       "Third Space Outer Edge",
    "第三空间与世界选择层": "Third Space and the World Choice Layer",
    "白缝外缘":           "White Fissure Outer Edge",
    "世界选择层":         "World Choice Layer",
    "重开的路":           "The Reopened Path",
    "回程路":             "The Return Path",
    // Chapter 07 – The Shore and the Garden
    "海边":             "The Shore",
    "海边的路":         "The Road to the Shore",
    "海边之后":         "After the Shore",
    "海边后侧":         "Behind the Shore",
    "海边与庭院":       "The Shore and the Garden",
    "海岸后续":         "After the Coast",
    "泉台途中":         "On the Way to the Fountain Square",
    "回程边界":         "The Return Boundary",
    "庭院外缘":         "Garden Outer Edge",
    "庭院回廊":         "The Garden Colonnade",
    "庭院入夜前":       "The Garden Before Night",
    "庭院深夜":         "The Garden at Night"
  };

  window.AliceCourtyardLocalization = {
    locale: "en",
    story: {
      title: "After Alice | Side Story"
    },
    chapters,
    lines,
    locationMap
  };
})();
