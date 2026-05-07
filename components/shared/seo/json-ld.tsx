type JsonLdProps = {
  payload: Record<string, unknown>;
};

export function JsonLd({ payload }: Readonly<JsonLdProps>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload).replaceAll("<", String.raw`\u003c`),
      }}
    />
  );
}

