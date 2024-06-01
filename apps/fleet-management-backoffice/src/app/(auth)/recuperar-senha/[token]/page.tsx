type RecoverPasswordProps = {
  params: {
    token: string;
  };
};

export default function RecoverPasswordToken({ params }: RecoverPasswordProps) {
  const { token } = params;

  return (
    <div>
      <p>{token}</p>
    </div>
  );
}
