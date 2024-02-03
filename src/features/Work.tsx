export default function Work() {
  return (
    <div class="mb-8">
      <h2 class="text-2xl font-bold uppercase">Work Experience</h2>
      <div class="mb-4">
        <div class="flex place-content-between">
          <h3 class="font-semibold ">Square - Block</h3>
          <div>October 2022 - Present</div>
        </div>
        <div class="text-slate-500">Full Stack Software Engineer L4</div>

        <ul class="list-disc ml-4">
          <li>
            Designed and led several projects for Square Payment Links on a
            9-person team using Golang, PHP, Typescript, and Vue that managed
            over $2.2 billion in processing volume, growing 54% YoY for 2023.
          </li>
          <li>
            Rebuilt Square Payment Link’s tipping feature to let over 1 million
            sellers customize tip percentages, support their local currencies,
            and to provide more localized tipping percents as defaults.
          </li>
          <li>
            Created new observability standards by migrating the team’s
            observability stack to Datadog, introducing anomaly alerts, better
            monitoring dashboards, front-end metric alerting, and automatic API
            acceptance testing.
          </li>
          <li>
            Led the migration of all tier-1 services that manage public Square
            Payment Links’ API and our other internal services and databases
            from on-prem to AWS infrastructure using Terraform.
          </li>
          <li>
            Created the buyer-side flow for Square’s restaurant QR code checkout
            experience, bringing over $70 million in processing volume for
            Square Payment Links’ MoM.
          </li>
        </ul>
      </div>
      <div class="mb-4">
        <div class="flex place-content-between">
          <h3 class="font-semibold ">
            Formerly Rally Health - Optum Digital / UnitedHealth Group
          </h3>
          <div>July 2021 - October 2022</div>
        </div>
        <div class="text-slate-500">Full Stack Software Engineer II</div>

        <ul class="list-disc ml-4">
          <li>
            Contributed with an 8-person Scrum team to a React front-end and
            Scala microservice back-end for a highly visible UHC healthcare
            client dashboard that’s accessed by over 50 million customers
            worldwide.{" "}
          </li>
          <li>
            Led and rapidly implemented the front-end requirements for a SSO
            redirect on myUHC to enable over 26 million customers to receive
            free COVID-19 tests by weeks end to comply with federal mandates.{" "}
          </li>
          <li>
            Drove a performance initiative to improve UX. I reduced our max
            bundle from 1.62MBs to 495KBs and slashed FCP by 0.4 seconds through
            lazy-loading, bundle-splitting and concurrent rendering.{" "}
          </li>
          <li>
            Spearheaded the front-end work for a domain unification effort on
            myUHC for all lines of business, resulting in a decrease in domains
            from 6 to 1, leading to greater customer and developer clarity.{" "}
          </li>
          <li>
            Contributed with a dedicated team to migrate myUHC from AngularJS to
            ReactJS. Removing AngularJS from our bundle led to a drop in bundle
            sizes by 30% and shrunk page load time by ~15%
          </li>
        </ul>
      </div>
      <div class="mb-4">
        <div class="flex place-content-between">
          <h3 class="font-semibold ">Clearview Social</h3>
          <div>August 2019 - July 2021</div>
        </div>
        <div class="text-slate-500">Full Stack Software Developer</div>
        <ul class="list-disc ml-4">
          <li>
            Engineered a web and mobile React/ Expo React Native app with a Node
            Express backend with an Agile 5-person team for a consumer facing
            SaaS app.{" "}
          </li>
          <li>
            Reduced React bundle size ~12% with tree shaking, package pruning,
            and using size optimized library
          </li>
          <li>
            Led an initiative to reduce database load and API response times by
            introducing a Redis cache aside strategy on top of our RESTful API
            Node.js backend. Cache hits approached 85% on some common endpoints.{" "}
          </li>
          <li>
            Modeled and created the AWS infrastructure and design docs for a
            scalable serverless image caching API that returns images in a
            specified dimension and image format while caching alternative
            formats. This decreased total image requests transfer size on some
            pages by over 80%.
          </li>
        </ul>
      </div>
      <div class="mb-4">
        <div class="flex place-content-between">
          <h3 class="font-semibold ">Clearview Social</h3>
          <div>May 2018 - August 2019</div>
        </div>
        <div class="text-slate-500">Intern</div>
        <ul class="list-disc ml-4">
          <li>
            Participated in creating a newly published Android and iOS app
            created with React Native, Redux, and Expo
          </li>
          <li>
            Maintained and contributed to a SaaS web app built with React,
            Node.js, Express, Webpack, and Sass
          </li>
          <li>
            Developed and renovated unit tests and snapshot tests with Mocha,
            Chai, and Jest across both mobile and web, with an average of 92%
            coverage across all branches
          </li>
          <li>
            Engineered queries using Sequelize and raw SQL for MySQL database
            hosted on AWS's RDS
          </li>
        </ul>
      </div>
    </div>
  );
}
