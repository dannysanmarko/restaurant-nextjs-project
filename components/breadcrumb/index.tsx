import Link from "next/link";

const Breadcrumb = ({children} : any) => (
  <section className="breadcrumb">
    <div className="container">
      <ul className="breadcrumb-list">
        <li><Link href="/"><i className="icon-home" style={{cursor: 'pointer'}}></i></Link></li>
        <li>{children}</li>
      </ul>
    </div>
  </section>
);


export default Breadcrumb