interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-6">
      {children}
    </div>
  );
}
