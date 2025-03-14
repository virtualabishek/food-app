import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import HomePage from "@/ui/pages/HomePage";

export const Route = createFileRoute("/")({
  component: () => <HomePage />,
});
