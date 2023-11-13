import "./BreadCrumb.scss"

const Breadcrumb = ({ items }) => {
  return (
    <div className="breadcrumb shadow">
      {items?.map((item, index) => (
        <div key={index}>
          {index > 0 && <span> / </span>}
          {item?.link ? (
            <a className="text-black " href={item.link}>
              {item.label}
            </a>
          ) : (
            <span className="text-Black">{item.label}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
