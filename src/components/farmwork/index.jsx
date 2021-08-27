export const Container = ({ children }) => <div className="container">{children}</div>;

export const Row = ({ children }) => <div className="row">{children}</div>;

export const Col = ({ children, grid }) => <div className={grid}>{children}</div>;
