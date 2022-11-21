import type { LoaderFunction } from "@remix-run/cloudflare";

export default function Index() {
    return <></>;
}

export const loader: LoaderFunction = async () => {
    console.log("DB", DB);

    return null;
};
