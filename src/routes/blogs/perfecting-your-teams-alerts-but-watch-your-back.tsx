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
        title="Perfecting Alerts: Save Money, Sleep Better, and Watch Your Back"
        date="July 16, 2025"
        id={0}
      >
        <Text>
          Good alerting and monitoring is better for your (and your teams) sleep
          and mental health than any subscription smart bed or health gadget.
          They also help you prevent <em>or shorten</em> the time your customers
          lose access to your product; sounds like a win-win! The goal is always
          the same: get alerted fast and accurately to prevent alert fatigue.
          Let’s dig into that.
        </Text>

        <div class="space-y-2">
          <Text variant="h2">What to measure?</Text>
          <Text>
            We are far from creating our first alert. The worst thing you can do
            is go ham and create alerts with no strategy or inclination of what
            actually matters to your customers. Let’s use an example of a
            checkout-based application, such as Stripe Payment Links.
          </Text>
        </div>

        <div class="space-y-2">
          <Text variant="h3">Finding your “Jobs to be Done” JTBD</Text>
          <Text>
            With every application, such as Stripe Payment Links, there are
            several jobs to be done, aka actions customers want to take; for
            example, they want to check out, they want to create a link, they
            want to fetch their links through the API. Your job is to find each
            of these broad jobs and rank them from P0 (most important) to P4
            based on what your customers' needs are.
          </Text>
          <Text>
            Every JTBD is a window into how reliably your application as a whole
            is performing, and each one comes with an incredible cost to ensure
            its reliability and observability are up to snuff. With that in
            mind, keep the JTBD that are most important without overburdening
            your team; no one but Amazon has the resources to chase after
            everything.
          </Text>
        </div>

        <div class="space-y-2">
          <Text variant="h3">What makes you tick?</Text>
          <Text>
            Each JTBD will most likely include several critical steps that are
            required to complete the job. To accurately measure your overall
            JTBD health, you need to find those steps so we can create SLOs to
            measure and monitor their performance. For example, Stripe Payment
            Links may have the following steps for the P0 JTBD, Checkout:
          </Text>
          <ol class="list-decimal pl-5 space-y-2 marker:text-blue-500">
            <li>
              <Text as="span" variant="serif">
                Load Page API
              </Text>
            </li>
            <li>
              <Text as="span" variant="serif">
                Load Payment UI
              </Text>
            </li>
            <li>
              <Text as="span" variant="serif">
                Verify Card Data API
              </Text>
            </li>
            <li>
              <Text as="span" variant="serif">
                Checkout API
              </Text>
            </li>
            <li>
              <Text as="span" variant="serif">
                Subscription API
              </Text>
            </li>
          </ol>
          <Text class="italic">… and possibly many more.</Text>
          <Text>
            We may have skipped some still important, but not critical steps,
            such as Discount APIs. Not being able to add a discount code does
            not strictly block the Checkout JBTD, as users can still check out.
            As a result, that would be another separate JTBD.
          </Text>
          <Text>
            It’s important not to get carried away; you may be tempted to add
            database or network load SLOs into the P0 Checkout JTBD; don’t. Keep
            your SLOs as close to the customer as possible. Ask yourself: if our
            database goes down, wouldn’t that impact our Checkout API's success
            rate or latency, anyway?
          </Text>
        </div>

        <div class="space-y-2">
          <Text variant="h4">Dependency tracking (bonus section!)</Text>
          <Text>
            Each step will have a myriad of dependencies. Keep track of them and
            list them as hard (if they go down, they will take down the step and
            therefore the JTBD) and soft dependencies! You may notice a few hard
            dependencies that should not be listed as hard, but are, because
            there are no redundancies. Hammer away at those as if your life
            depends on it; you may see a few that have already caused you
            outages before. Take the easy wins!
          </Text>
        </div>

        <div class="space-y-2">
          <Text variant="h3">Finally, SLOs</Text>
          <Text>
            We have the JTBD and the critical steps to fulfill that job. To
            measure each step and assess its overall health, we need SLOs. If
            you weren’t keeping a Google Sheet tracking your work so far, now
            would be the time.
          </Text>
          <Text>
            Each step can usually be roughly broken down into the following
            metrics, which we’ll turn into SLOs.
          </Text>
          <ol class="list-decimal pl-5 space-y-2 marker:text-blue-500">
            <li>
              <Text as="span" variant="serif">
                Success rate
              </Text>
            </li>
            <li>
              <Text as="span" variant="serif">
                Latency
              </Text>
            </li>
            <li>
              <Text as="span" variant="serif">
                Anomalous volume (here lies dragons)
              </Text>
            </li>
          </ol>
          <Text>
            With your JTBD(s), your steps lined out, and the SLOs created,
            you’re ready to learn how to alert on these metrics.
          </Text>
        </div>

        <div class="space-y-2">
          <Text variant="h2">The hard part: How to alert</Text>
          <Text>todo</Text>
        </div>
      </BlogLayout>
    </>
  );
}
