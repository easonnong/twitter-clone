export const MenuIcon = (props) => {
  return (
    <div className="flex pl-2 py-2 items-center space-x-2">
      <props.icon className="h-7" />
      <p className="text-gray-700">{props.text}</p>
    </div>
  );
};
