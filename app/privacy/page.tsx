import LegalPage, { legalMetadata, type Part } from "../components/LegalPage";
import { CONTACT_EMAIL } from "../lib/site";

export const metadata = legalMetadata(
  "Privacy policy",
  "What koinelabs.com collects, why, who handles it for us, and how to see, change or delete it.",
  "/privacy",
);

const mail = <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>;

const parts: Part[] = [
  {
    id: "who",
    title: "Who we are",
    body: (
      <>
        <p>Koine Labs (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is a research lab based in Atlanta, Georgia, in the United States. It is run by Aakash Agrawal, who is responsible for the personal information described here.</p>
        <p>You can reach us about anything in this policy at {mail}.</p>
      </>
    ),
  },
  {
    id: "scope",
    title: "What this policy covers",
    body: (
      <>
        <p>This policy covers this website, koinelabs.com: reading it, joining a waitlist, sending us a message, and the emails we send you because you asked for them.</p>
        <p>It does not cover our apps. Annula has its own privacy policy at <a href="https://useannula.com/privacy">useannula.com/privacy</a>. Anchor and Mentat are not offered to the public. Before either is, it will have its own privacy notice, and we will link to it from here.</p>
      </>
    ),
  },
  {
    id: "collect",
    title: "What we collect, and why",
    body: (
      <dl className="terms">
        <div>
          <dt>When you visit</dt>
          <dd>Our host receives what any website receives: your IP address, the page you asked for, the time, and your browser and device type. Vercel uses this to deliver the page and to keep the site secure, and keeps these records for a short time under its own retention settings. Our reason: our legitimate interest in running a working, secure website.</dd>
        </div>
        <div>
          <dt>Visitor statistics</dt>
          <dd>We count visits with PostHog, set up so that it stores nothing on your device: no cookies and no browser storage. It records the page you viewed and its title, the site that sent you, how long the page was open and how far it was scrolled, which links and buttons were pressed, your approximate location (country, region and city) worked out from your IP address, and your browser, operating system, device type, screen size, language and time zone. To tell one visitor from another, PostHog combines your IP address and browser details with the date into a number that changes every day, and does not keep the IP address. So no one is followed from one day to the next, and no profile of you is built. We remove anything after a &ldquo;?&rdquo; or &ldquo;#&rdquo; from page addresses before they are counted. If the link that brought you carried campaign labels (such as utm_source), we keep those, and we discard advertising click identifiers. We also count sign-ups and messages by product and topic, never with your address or anything you typed. If your browser sends Global Privacy Control or Do Not Track, the statistics are not loaded and nothing is counted. Our reason: our legitimate interest in knowing which pages are useful.</dd>
        </div>
        <div>
          <dt>When you join a waitlist</dt>
          <dd>Your email address, which product it is for, when you signed up, and whether you also asked for news about the lab. We use it to email you about that product: when it opens, when there is a place for you, and important news about it. We send news about the lab only if you ticked the box for it. Our reason: your consent, which you can withdraw at any time with the unsubscribe link in every email.</dd>
        </div>
        <div>
          <dt>When you send us a message</dt>
          <dd>Your name if you give it, your email address, the topic you chose and your message. The form sends it to our inbox as an email; this website does not store it. We use it only to read and answer you. Our reason: our legitimate interest in answering people who write to us, or steps you ask us to take before an agreement.</dd>
        </div>
      </dl>
    ),
  },
  {
    id: "not",
    title: "What we do not do",
    body: (
      <ul>
        <li>We do not set cookies, and we do not use your browser&rsquo;s storage to track you.</li>
        <li>We do not run advertising, advertising trackers, session recording or social media pixels.</li>
        <li>We do not sell your personal information, and we do not share it for advertising based on your activity elsewhere (what California law calls &ldquo;selling&rdquo; and &ldquo;sharing&rdquo;).</li>
        <li>We do not give it to data brokers, and we do not use it to train AI models, ours or anyone else&rsquo;s.</li>
        <li>We do not ask this website for sensitive information, such as health, financial or biometric details. Please do not put them in a message.</li>
      </ul>
    ),
  },
  {
    id: "providers",
    title: "Who handles it for us",
    body: (
      <>
        <p>Three companies process personal information on our behalf, under contracts that limit them to doing it for us:</p>
        <dl className="terms">
          <div><dt>Vercel Inc., United States</dt><dd>Hosts the website and keeps its request records.</dd></div>
          <div><dt>PostHog Inc., United States</dt><dd>Provides the visitor statistics.</dd></div>
          <div><dt>Loops (loops.so), United States</dt><dd>Keeps the waitlists, sends our emails, and delivers contact-form messages to our inbox.</dd></div>
        </dl>
        <p>We may also disclose information when the law requires it, to protect people&rsquo;s safety, or as part of a merger or sale of the lab, in which case this policy would continue to apply to it.</p>
      </>
    ),
  },
  {
    id: "keep",
    title: "How long we keep it",
    body: (
      <ul>
        <li>Request records: a short time, as set by Vercel.</li>
        <li>Visitor statistics: records that do not identify you, kept by PostHog for up to one year.</li>
        <li>Waitlists: until you unsubscribe or ask us to delete your address. If a product stops being developed, we delete its waitlist.</li>
        <li>Messages: as long as we need to deal with them, and no longer than two years, unless they lead to an ongoing working relationship.</li>
      </ul>
    ),
  },
  {
    id: "transfers",
    title: "Where it is kept",
    body: <p>Your information is kept in the United States. If you write to us or sign up from outside it, including from the European Economic Area, the United Kingdom or Switzerland, your information is transferred to the United States under the safeguards in our providers&rsquo; data processing terms, such as the European Commission&rsquo;s Standard Contractual Clauses.</p>,
  },
  {
    id: "rights",
    title: "Your rights",
    body: (
      <>
        <p>Wherever you live, you can ask us to:</p>
        <ul>
          <li>tell you what we hold about you and give you a copy;</li>
          <li>correct it;</li>
          <li>delete it;</li>
          <li>stop using it for a purpose, or stop emailing you (every email also has a one-click unsubscribe link).</li>
        </ul>
        <p>If you are in the European Economic Area, the United Kingdom or Switzerland, you also have the right to object to processing based on our legitimate interests, to take your data with you, to withdraw consent at any time, and to complain to your data protection authority.</p>
        <p>If you live in a US state with a privacy law, such as California, you have the right to know, delete and correct, and the right to opt out of the sale or sharing of your information, which we do not do. We will not treat you differently for using any of these rights. You can use an authorised agent to make a request.</p>
        <p>To make a request, email {mail} from the address you used with us, so we can confirm it is yours. We will answer within 30 days.</p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: <p>This website is not meant for anyone under 16, and we do not knowingly collect information from them. If you think a child has given us their details, write to {mail} and we will delete them.</p>,
  },
  {
    id: "security",
    title: "Keeping it safe",
    body: <p>The site is served only over an encrypted connection, the information is held by the two providers above, and only the people who run the lab can see it. If something goes wrong, we will tell the people affected and the authorities as the law requires. To report a security problem, see <a href="/security">our security page</a>.</p>,
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: <p>When this policy changes, we update the date at the top of this page. If a change affects how we use information you have already given us, we will email the people it affects before it takes effect.</p>,
  },
  {
    id: "contact",
    title: "Contact",
    body: <p>Questions, requests and complaints about privacy go to {mail}.</p>,
  },
];

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy policy"
      summary="This site collects as little as it can: anonymous visit counts, your email address if you join a waitlist, and your message if you write to us. No cookies, no advertising, and we never sell your information."
      parts={parts}
    />
  );
}
