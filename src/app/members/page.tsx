import React from "react";
import Link from "next/link";
export default function MembersPage() {
  return (
    <div>
      <h3 className="text-3xl">This is Will be the member Page</h3>
      <Link href={"/"}>Back to Dasboard</Link>
    </div>
  );
}
