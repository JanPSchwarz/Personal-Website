export default function Heading({ title }) {
  return (
    <div className={`flex items-center px-5`}>
      <h2 className={`flex-[1] text-3xl`}>{title}</h2>
      <div className={`h-[3px] flex-[2] bg-colorPreset3`} />
    </div>
  );
}
