// Ported from design-prototypes/public-v10 on 14 Nov 2026. Edit this file directly from now on.
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import WaitlistSection from "../components/WaitlistSection";

export const metadata: Metadata = {
  title: "Mentat · Koine Labs",
  description: "Mentat is Koine Labs' interface for the age of AI agents: look at what you mean, tap, and your agents act on it.",
  alternates: { canonical: "/mentat" },
  openGraph: {
    title: "Mentat · Koine Labs",
    description: "Mentat is Koine Labs' interface for the age of AI agents: look at what you mean, tap, and your agents act on it.",
    url: "/mentat",
    images: [{ url: "/og/og-mentat.png", width: 1200, height: 630, alt: "Mentat, from Koine Labs" }],
  },
  twitter: { card: "summary_large_image", title: "Mentat · Koine Labs", description: "Mentat is Koine Labs' interface for the age of AI agents: look at what you mean, tap, and your agents act on it.", images: ["/og/og-mentat.png"] },
};

export default function Page() {
  return (
    <>
      <p className="crumb"><a href="/">Koine Labs</a></p>
      <section className="sec project page-top" id="mentat">
        <div className="in">
          <header className="side">
            <h1 className="p-name">Mentat</h1>
            <p className="p-line">The telepathic mouse.</p>
          </header>
          <div className="main">
            <h2 className="kicker">What we are trying to do</h2>
            <p className="mission">Build the interface for the age of AI agents.</p>
            <figure className="frame-fig">
              <div className="sheet paper">
                <div className="plot fig-photo"><img src="/assets/mentat-frame.webp" width="1760" height="770" fetchPriority="high" alt="The Mentat frame, drawn from its design files: an angular frame worn like glasses. A mount on top of the bridge takes the forward camera, a mount under each lens opening takes an eye camera, and there is a nose support and two arms." /> <svg className="over" viewBox="0 0 1760 770" aria-hidden="true"><path className="l2" d="M123 104L599 228M1153 712L848 628" /><circle className="dot" cx="599" cy="228" r="5" /><circle className="dot" cx="848" cy="628" r="5" /></svg> <span className="tag" style={{"--x": "1.2%", "--y": "8.5%"} as CSSProperties} aria-hidden="true">Forward camera mount</span> <span className="tag r" style={{"--x": "98.8%", "--y": "92.5%"} as CSSProperties} aria-hidden="true">Eye camera mounts<span className="wide-only">, one under each lens</span></span> <span className="tag q" style={{"--x": "1.2%", "--y": "95%"} as CSSProperties} aria-hidden="true">Frame v3.4, from our design files</span></div>
              </div>
            </figure>
            <div className="argue">
              <div className="text">
                <h2 className="part">What it is today</h2>
                <p>Mentat is a research prototype. The software can already tell roughly where on a screen you are looking, using an iPhone and a webcam.</p>
                <p>The frame above is today's prototype. It is printed in plastic, worn like glasses, and made to carry its own cameras. Looking and tapping to direct an agent is designed, and not built yet.</p>
              </div>
              <div className="align">
                <h3><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M10 0 12 8 20 10 12 12 10 20 8 12 0 10 8 8Z" fill="currentColor" /></svg>In line with the North Star</h3>
                <p>Agents now do much of the acting. They can only shape the future you want if they know what you intend, at the moment you intend it. Mentat is that link.</p>
              </div>
            </div>
            <div className="later">
              <h2 className="part">How it helps you</h2>
              <figure className="shot plan">
                <img src="/assets/mentat-d-desk-1400.webp" srcSet="/assets/mentat-d-desk-800.webp 800w, /assets/mentat-d-desk-1400.webp 1400w, /assets/mentat-d-desk-2048.webp 2048w" sizes="(min-width: 60rem) min(62.6rem, 69vw), 92vw" width="2048" height="1360" loading="lazy" alt="Line drawing of a person at a desk with a monitor and a laptop, seen from behind, wearing the frame. A line runs from their eyes to one button on the monitor, which is lit. Their left hand lies open on the bare desk, palm down, and the index finger taps it. Labels: 1, eyes hover. 2, the target lights up. 3, a tap on the desk clicks it." />
                <figcaption>How it would work at a desk. Your eyes rest on the button you mean and it lights up. One tap of a finger on the desk clicks it.</figcaption>
              </figure>
              <dl className="later-list two">
                <div>
                  <dt>Point by looking</dt>
                  <dd>Your eyes are already on the thing you mean. Mentat uses that, so there is nothing to reach for and no pointer to steer.</dd>
                </div>
                <div>
                  <dt>Agents that know what you mean</dt>
                  <dd>Glance at a paragraph, a file or a button and say what you want. The agent knows what "this" is, so you never have to describe it.</dd>
                </div>
                <div>
                  <dt>Nothing happens by accident</dt>
                  <dd>Looking only points. Nothing is clicked or sent until your hand acts.</dd>
                </div>
                <div>
                  <dt>No screen on your face</dt>
                  <dd>Mentat works with the screens you already own. It adds no display and no lenses.</dd>
                </div>
              </dl>
              <figure className="shot">
                <div className="sheet paper"><img className="blend" src="/assets/mentat-d-gestures-1400.webp" srcSet="/assets/mentat-d-gestures-800.webp 800w, /assets/mentat-d-gestures-1400.webp 1400w, /assets/mentat-d-gestures-2048.webp 2048w" sizes="(min-width: 60rem) min(46rem, 66vw), min(46rem, 88vw)" width="2048" height="1244" loading="lazy" alt="Seven hand gestures. On the table: tap to click, two-finger tap to right-click, two-finger slide to scroll, pinch to zoom. In the air: pinch to click, pinch and move to drag, two-hand pinch to zoom." /></div>
                <figcaption>The hand does the acting, on a table or in the air. These are the gestures as designed.</figcaption>
              </figure>
            </div>
            <div className="later">
              <h2 className="part">What we want to build</h2>
              <p className="plan-note">These are design drawings of what we are working toward. None of it is built yet.</p>
              <h3 className="kicker">What it will do</h3>
              <dl className="later-list">
                <div>
                  <dt>Works on every screen you own</dt>
                  <dd>Glance from a laptop to a monitor to another computer and carry on working.</dd>
                </div>
                <div>
                  <dt>Reaches beyond screens</dt>
                  <dd>Look at a speaker or a lamp and adjust it, through the phone or computer that already controls it.</dd>
                </div>
                <div>
                  <dt>Follows your hands</dt>
                  <dd>Cameras on the frame see your hands and the things around you, so a small gesture is enough.</dd>
                </div>
                <div>
                  <dt>Hears silent speech</dt>
                  <dd>Form words without saying them aloud, from the lab's earlier work on Wisp.</dd>
                </div>
                <div>
                  <dt>Senses how you are doing</dt>
                  <dd>Tiredness and focus read from the body, from the lab's earlier work on Daybook.</dd>
                </div>
                <div>
                  <dt>Answers quietly</dt>
                  <dd>Sound built in, so an agent can reply with nothing in your ears.</dd>
                </div>
              </dl>
              <figure className="shot plan">
                <img src="/assets/mentat-d-screens-1400.webp" srcSet="/assets/mentat-d-screens-800.webp 800w, /assets/mentat-d-screens-1400.webp 1400w, /assets/mentat-d-screens-2048.webp 2048w" sizes="(min-width: 60rem) min(62.6rem, 69vw), 92vw" width="2048" height="1360" loading="lazy" alt="Line drawing of a home studio seen from above with two walls cut away. A person wearing the frame sits at a desk. A laptop, a monitor and a tablet stand on the desk and a television hangs on the far wall, numbered one to four. A solid line runs from their eyes to a lit button on the monitor, and dashed lines reach the other three screens. Their hand taps the desk. Labels: look at any screen; the tap goes to that one. Written along the bottom: one pair of eyes, every screen you own." />
                <figcaption>Every screen you own. Look at the laptop, the monitor, the tablet or the television, and your tap goes to that one.</figcaption>
              </figure>
              <figure className="shot plan">
                <img src="/assets/mentat-d-room-1400.webp" srcSet="/assets/mentat-d-room-800.webp 800w, /assets/mentat-d-room-1400.webp 1400w, /assets/mentat-d-room-2048.webp 2048w" sizes="(min-width: 60rem) min(62.6rem, 69vw), 92vw" width="2048" height="1360" loading="lazy" alt="Line drawing of a living room. A person on a sofa wearing the frame looks at a speaker on a shelf, which is circled, and turns a pinched hand. Labels: 1, look at it. 2, pinch and turn. 3, the volume changes. Dashed lines reach a thermostat, a television and a lamp." />
                <figcaption>Beyond screens. Look at the speaker, pinch and turn your hand, and the volume changes. The lamp, the television and the thermostat would work the same way.</figcaption>
              </figure>
              <figure className="shot">
                <div className="sheet paper"><img className="blend" src="/assets/mentat-d-senses-1400.webp" srcSet="/assets/mentat-d-senses-800.webp 800w, /assets/mentat-d-senses-1400.webp 1400w, /assets/mentat-d-senses-2048.webp 2048w" sizes="(min-width: 60rem) min(46rem, 66vw), min(46rem, 88vw)" width="2048" height="1360" loading="lazy" alt="Line drawing of a head wearing the wraparound frame, with six labels: sees where you look, notices focus and fatigue, reads silent speech, answers quietly, battery, sees your hands and the room." /></div>
                <figcaption>What the frame would sense. Where each part sits is not decided, so the positions drawn here are placeholders.</figcaption>
              </figure>
              <figure className="shot">
                <div className="sheet paper"><img className="blend full" src="/assets/mentat-d-day-1400.webp" srcSet="/assets/mentat-d-day-800.webp 800w, /assets/mentat-d-day-1400.webp 1400w, /assets/mentat-d-day-2048.webp 2048w" sizes="(min-width: 60rem) min(59.8rem, 66vw), 88vw" width="2048" height="1360" loading="lazy" alt="Four scenes of one person wearing the frame. At the desk: look, then tap the table. On the sofa: look at the screen, pinch to play. In the kitchen: look at the speaker, turn your hand. Out walking: ask silently, hear the answer." /></div>
                <figcaption>A day with it: at the desk, on the sofa, in the kitchen and out walking.</figcaption>
              </figure>
              <h3 className="kicker">Three forms we are considering</h3>
              <figure className="shot">
                <div className="sheet paper"><img className="blend full" src="/assets/mentat-d-forms-1400.webp" srcSet="/assets/mentat-d-forms-800.webp 800w, /assets/mentat-d-forms-1400.webp 1400w, /assets/mentat-d-forms-2048.webp 2048w" sizes="(min-width: 60rem) min(59.8rem, 66vw), 88vw" width="2048" height="772" loading="lazy" alt="Three devices drawn side by side, each labelled with its eye cameras, hand camera and battery. Wraparound: everything in the frame. Bridge module: sits on the nose, battery behind the ear. Clip-on: clips to the glasses you own." /></div>
              </figure>
              <dl className="later-list">
                <div>
                  <dt>Wraparound frame</dt>
                  <dd>A full frame with nothing in front of the eyes: no display and no lenses. The battery and the radio sit in the arms.</dd>
                </div>
                <div>
                  <dt>Bridge module</dt>
                  <dd>A few grams on the bridge of the nose and nothing else on the face. The battery is worn behind the ear or as a pendant.</dd>
                </div>
                <div>
                  <dt>Clip-on</dt>
                  <dd>Clips onto the glasses you already wear, for the many people who wear them.</dd>
                </div>
              </dl>
              <figure className="shot">
                <div className="sheet paper"><img className="blend" src="/assets/mentat-d-worn-1400.webp" srcSet="/assets/mentat-d-worn-800.webp 800w, /assets/mentat-d-worn-1400.webp 1400w, /assets/mentat-d-worn-2048.webp 2048w" sizes="(min-width: 60rem) min(46rem, 66vw), min(46rem, 88vw)" width="2048" height="1116" loading="lazy" alt="Three line-drawn portraits. One person wears the wraparound frame. One wears the bridge module, with a small battery behind the ear. One wears ordinary glasses with the clip-on module on the bridge." /></div>
                <figcaption>How each one would sit on the face.</figcaption>
              </figure>
              <h3 className="kicker">A closer look at each</h3>
              <figure className="shot">
                <div className="sheet paper"><img className="blend" src="/assets/mentat-d-wraparound-1400.webp" srcSet="/assets/mentat-d-wraparound-800.webp 800w, /assets/mentat-d-wraparound-1400.webp 1400w, /assets/mentat-d-wraparound-2048.webp 2048w" sizes="(min-width: 60rem) min(46rem, 66vw), min(46rem, 88vw)" width="2048" height="1360" loading="lazy" alt="Design sheet for the wraparound frame. A large three-quarter view is labelled: eye cameras, infrared lights, hand cameras, battery, radio, and a clear lens with no display. Below it are views from the front, the side and above." /></div>
                <figcaption>The wraparound frame, with views from the front, the side and above.</figcaption>
              </figure>
              <figure className="shot">
                <div className="sheet paper"><img className="blend" src="/assets/mentat-d-bridge-1400.webp" srcSet="/assets/mentat-d-bridge-800.webp 800w, /assets/mentat-d-bridge-1400.webp 1400w, /assets/mentat-d-bridge-2048.webp 2048w" sizes="(min-width: 60rem) min(46rem, 66vw), min(46rem, 88vw)" width="2048" height="1360" loading="lazy" alt="Design sheet for the bridge module, drawn in place on the faint outline of a face. A small pod sits on the bridge of the nose. Labels: hand camera, eye cameras, infrared lights, light sensors under each eye, nose pads, magnetic power link, and battery, behind the ear. Below it are views from the front, the side and above." /></div>
                <figcaption>The bridge module. A small pod rests on the nose, with no lenses and no frame around the eyes. A thin wire curves under each eye, and the battery sits behind the ear.</figcaption>
              </figure>
              <figure className="shot">
                <div className="sheet paper"><img className="blend" src="/assets/mentat-d-clip-1400.webp" srcSet="/assets/mentat-d-clip-800.webp 800w, /assets/mentat-d-clip-1400.webp 1400w, /assets/mentat-d-clip-2048.webp 2048w" sizes="(min-width: 60rem) min(46rem, 66vw), min(46rem, 88vw)" width="2048" height="1040" loading="lazy" alt="Three steps. One: an ordinary pair of glasses. Two: the small module about to clip onto the bridge. Three: a person wearing the glasses with the module in place. Labels: your glasses, clip it on, look and tap." /></div>
                <figcaption>The clip-on. It clips to the bridge of the glasses you already wear.</figcaption>
              </figure>
            </div>
            <div className="later">
              <h2 className="part">Where it is going</h2>
              <p className="going">A device light enough to forget you are wearing it, and a way of working where you imply an intention and it is carried out.</p>
            </div>
          </div>
          <dl className="facts">
            <div>
              <dt>Stage</dt>
              <dd>Research prototype</dd>
            </div>
            <div>
              <dt>Kind</dt>
              <dd>Hardware and software</dd>
            </div>
            <div>
              <dt>Started</dt>
              <dd>October 2026</dd>
            </div>
          </dl>
        </div>
      </section>
      <WaitlistSection product="mentat" />
      <section className="sec" tabIndex={-1}>
        <div className="in">
          <header className="side">
            <h2>Also from the lab</h2>
          </header>
          <div className="main">
            <div className="next"><a href="/annula"><b>Annula</b><span>Research software for investors</span></a><a href="/anchor"><b>Anchor</b><span>An app that learns how you live</span></a><a href="mailto:team@koinelabs.com?subject=Mentat"><b>Write to us</b><span>team@koinelabs.com</span></a></div>
          </div>
        </div>
      </section>
    </>
  );
}
