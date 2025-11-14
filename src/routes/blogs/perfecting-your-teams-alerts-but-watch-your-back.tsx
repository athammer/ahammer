import { Text } from "~/components/ui/Text";
import BlogLayout from "~/components/ui/BlogLayout";

export default function CssGridArticle() {
  return (
    <>
      <meta
        name="description"
        content="Learn how to create effective alerting strategies for your engineering team. Tips on measuring user impact, setting up actionable alerts, and maintaining reliability from a Square engineer."
      />
      <BlogLayout
        title="Perfecting your team's alerts, but watch your back"
        date="July 16, 2025"
        id={0}
      >
        <Text>
          I own and created the alerts and strategy for Square&rsquo;s web
          checkout, which processes over $7&nbsp;billion annually for sellers
          all over the world. I have been responsible for saving customers tens
          of millions of dollars, all the while ruining Christmas, birthdays,
          and any peace and quiet you may hold dear. If I were on your team, you
          might hate what I do, but that&rsquo;s just the job description of
          owning alerts&mdash;the reality many teams face.
        </Text>

        <Text>Let&rsquo;s get you started on your alerting journey.</Text>

        <div class="space-y-2">
          <Text variant="h2">Assign an owner</Text>
          <Text>
            Firstly, if your team does not have a DRI (Directly Responsible
            Individual&mdash;also known as &ldquo;the owner&rdquo;) for your
            alerts, you need one. You can never have accurate and quiet alerts
            if there is no one to take charge and learn from their mistakes.
            Better yet, create documentation of your journey and onboard team
            members to your alerting strategy to reduce the all-important bus
            factor; but in the end, someone must care, be responsible, and
            learn.
          </Text>
        </div>

        <div class="space-y-2">
          <Text variant="h2">What to measure</Text>
          <Text>
            You may feel overwhelmed by the amount of data you need to measure.
            Should you measure application health upstream, downstream, or maybe
            memory, CPU utilization, or number of coffees ingested?
          </Text>
          <Text>
            First, back up and identify all P0 and P1
            Jobs&nbsp;To&nbsp;Be&nbsp;Done (JTBD) that are critical to your
            users, such as &ldquo;take a payment&rdquo;, &ldquo;add to
            cart&rdquo;, &ldquo;withdraw money&rdquo;. Write them all down; now
            for something controversial.
          </Text>
          <Text>
            We need to measure degradation on these JTBD; however, we should not
            measure memory usage, CPU utilization, or network throughput.
            Instead, measure the rate of successful job events&nbsp;&mdash; the
            ratio of <code>success / valid events</code>; this will often be API
            responses. CPU, memory, and the network&mdash;even if they are hard
            dependencies&mdash;don't tell you when users are actually unable to
            finish their job. Start and end with user impact; everything else is
            a distraction until you have perfected your alerts.
          </Text>
          <Text>
            Ensure you capture the full flow of P0 jobs your user may need. For
            ecommerce you may have the jobs: &ldquo;page load&rdquo; →
            &ldquo;add to cart&rdquo; → &ldquo;validate order&rdquo; →
            &ldquo;take payment&rdquo;.
          </Text>
        </div>

        <div class="space-y-2">
          <Text variant="h2">How to measure</Text>
          <Text>
            Each metric from your JTBD will have different volume and
            characteristics; some may even have such low volume that you may
            consider them no longer P0. For the sake of your sanity, put these
            jobs and their metrics in a sheet and note which metrics are
            reliable, such as paying for an item, and which ones are
            questionable, such as &ldquo;add to cart&rdquo;. This sheet will
            inform the aggressiveness you can set for your alerts and should
            serve as your primary source of truth.
          </Text>
        </div>

        <div class="space-y-2">
          <Text variant="h2">How to alert</Text>
          <Text>
            Alerting on a metric is not about a single alert but a series of
            alerts that capture the behaviors of the metric; for example your
            alerts might be accurate during the day but noisy at night. Because
            of this, your alerts and strategies will differ from mine. However,
            one thing will always be the same.
          </Text>
          <Text variant="h3">ALERTS MUST BE ACTIONABLE</Text>
          <Text>
            If an alert goes off and there is not a slight sense of &ldquo;oh
            fuck&rdquo; the alerts are too noisy. Alerts should only fire if
            there is some action to take&mdash;whether that be fixing the alert,
            filing a bug, or declaring a SEV and getting all hands on deck.
          </Text>
        </div>

        <div class="space-y-2">
          <Text variant="h2">My alerting strategy</Text>
          <Text>todo</Text>
        </div>
      </BlogLayout>
    </>
  );
}
