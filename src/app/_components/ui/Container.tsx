type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

export const Container = (props: ContainerProps) => {
  const { className, children } = props;
  return (
    <div className={`container m-auto flex max-w-screen-xl flex-col items-center py-16 ${className}`}>{children}</div>
  );
};
