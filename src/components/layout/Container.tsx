type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <>
      <div className="px-6 lg:mx-40 mx-auto">{children}</div>
    </>
  );
}
