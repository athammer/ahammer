import { BlogPost } from "~/features/blog/ui/BlogPost";
import { BlogParagraph } from "~/features/blog/ui/BlogParagraph";
import { BlogParagraphSubsection } from "~/features/blog/ui/BlogParagraphSubsection";

export default function SettingUpSquarePaymentLinks() {
  return (
    <BlogPost title="Setting up Square Payment Links the Stripe Alternative">
      <BlogParagraph>WIP :)</BlogParagraph>
      <BlogParagraphSubsection>Square Payment Links?</BlogParagraphSubsection>
      <BlogParagraph>
        Previously known as Square Online Checkout, Square Payment Links allow you to take payment through a generic payment page much like Stripe Payment Links. While not as fleshed out as Stripe, Square offers world class integrations for any brick and mortar store such as resturatns, coffee shops, or any quick or full service restaurant while offering a much easier setup compared to Stripe if you're looking to get set up fast.
      </BlogParagraph>
      <BlogParagraphSubsection>Setting up Square Payment Links</BlogParagraphSubsection>
      <BlogParagraph></BlogParagraph>
    </BlogPost>
  );
}
