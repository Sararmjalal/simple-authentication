import { Box } from "@/components/ui";

export default function HomeLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <Box className="min-h-screen items-center justify-center bg-gray-50 p-4">
      {children}
    </Box>
  );
}