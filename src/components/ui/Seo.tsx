import { Show } from "solid-js";
// @ts-ignore - provided by runtime
import { Link, Meta, Title } from "@solidjs/meta";

export const SITE_URL = "https://ahammer.dev";
export const SITE_NAME = "Aaron Hammer";
export const OG_IMAGE = `${SITE_URL}/og.png`;
export const PERSON_ID = `${SITE_URL}/#person`;

// Per-page head tags. Each route renders one of these so titles, descriptions,
// and canonical URLs are unique instead of inheriting the homepage's.
export default function Seo(props: {
  title: string;
  description: string;
  // Omit for pages that shouldn't declare a canonical URL (e.g. 404)
  path?: string;
  type?: "website" | "profile" | "article";
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
}) {
  const url = () => (props.path ? SITE_URL + props.path : undefined);

  return (
    <>
      <Title>{props.title}</Title>
      <Meta name="description" content={props.description} />
      <Show when={url()}>
        <Link rel="canonical" href={url()} />
        <Meta property="og:url" content={url()} />
      </Show>
      <Show when={props.noindex}>
        <Meta name="robots" content="noindex, follow" />
      </Show>

      <Meta property="og:type" content={props.type ?? "website"} />
      <Meta property="og:title" content={props.title} />
      <Meta property="og:description" content={props.description} />
      <Meta property="og:image" content={OG_IMAGE} />
      <Meta property="og:image:width" content="1200" />
      <Meta property="og:image:height" content="630" />
      <Meta property="og:image:alt" content="Aaron Hammer — software engineer" />
      <Show when={props.publishedTime}>
        <Meta property="article:published_time" content={props.publishedTime} />
        <Meta property="article:author" content={SITE_URL} />
      </Show>
      <Show when={props.modifiedTime}>
        <Meta property="article:modified_time" content={props.modifiedTime} />
      </Show>

      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={props.title} />
      <Meta name="twitter:description" content={props.description} />
      <Meta name="twitter:image" content={OG_IMAGE} />
    </>
  );
}

// Parses dates like "July 16, 2025" into ISO 8601; undefined for "Coming Soon".
export const isoDate = (date?: string) => {
  if (!date) return undefined;
  const parsed = new Date(`${date} 12:00 UTC`);
  return isNaN(parsed.getTime()) ? undefined : parsed.toISOString().slice(0, 10);
};
