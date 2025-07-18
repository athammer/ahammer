import { Text } from "~/components/ui/Text";
import BlogLayout from "~/components/ui/BlogLayout";

export default function CssGridArticle() {
  return (
    <BlogLayout
      title="Perfecting your team's alerts, but watch your back"
      date="July 16, 2025"
      visitors={0}
    >
      <Text>TODO :)</Text>
      {/* <Text>
        I have managed alerting for multiple checkouts at Square and can
        confidently say I've developed (one of) the best alerting strategy at
        Square. It wasn't through being smart, but by banging my head against
        the wall for a few years. I hope to spare you a few years and a few
        holes in your wall.
      </Text>

      <div class="space-y-2">
        <Text variant="h2">The problem</Text>
        <Text>
          Good alerting is critical for any company that cares about their
          customers. Good alerting is also critical for your coworkers sanity
          and their ability to enjoy christmas without 50 volume alerts paging
          them.
        </Text>
      </div>

      <div class="space-y-2">
        <Text variant="h2">The solution</Text>
        <Text variant="h4">DELETE ALL THE ALERTS!!!</Text>
      </div>

      <div class="space-y-2">
        <Text variant="h2">The compromise</Text>
        <Text>
          Understand there is no solution, traffic patterns change, services
          change, upstream dependencies degrade, and holidays happen. Alerts are
          like services, when they are not manitained they break and degrade.
        </Text>
        <Text>
          Now that you understand you're in this for the long haul, you should
          do the following:
        </Text>
        <ul class="list-disc list-inside">
          <Text as="li">
            Gather all the jobs that are important to your customers. They are
            your JTBD (jobs to be done).
          </Text>
          <Text as="li">
            Gather all the metrics related to your JTBD. Focus on the most
            downstream metrics. We are focused on actual customer impact, not if
            an upstream service is degraded.
          </Text>
        </ul>
      </div> */}
    </BlogLayout>
  );
}
