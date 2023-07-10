"use client";

import { Button } from "flowbite-react";

export default function ButtonPills() {
  return (
    <>
      <Button color="gray" pill>
        <p>Gray</p>
      </Button>
      <Button color="dark" pill>
        <p>Dark</p>
      </Button>
      <Button color="light" pill>
        <p>Light</p>
      </Button>
      <Button color="success" pill>
        <p>Success</p>
      </Button>
      <Button color="failure" pill>
        <p>Failure</p>
      </Button>
      <Button color="warning" pill>
        <p>Warning</p>
      </Button>
      <Button color="purple" pill>
        <p>Purple</p>
      </Button>
    </>
  );
}
