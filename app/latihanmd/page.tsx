import { MdComponent } from '@/components/ui/mdx-component';

export default function Page() {
  const exp = `
  # Hello World
  ## This is a markdown file
  ### This is a subheading
  `;
  return (
    <div>
      <MdComponent content={exp} />
    </div>
  );
}
