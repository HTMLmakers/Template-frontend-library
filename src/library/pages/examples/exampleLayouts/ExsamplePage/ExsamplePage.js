import React from "react";

import "../../../../../common/components/layout/Page/styles.scss";


const ExsamplePage = () => {
  return (
    <div className="page">

      <div className="page__wrap">
        <header className="page__header">
          header
        </header>

        <div className="page__base">

          <aside className="page__sidebar-primary">
            sidebar-primary
          </aside>

          <div className="page__base-wrap">
            <div className="page__add">
              add
            </div>

            <main className="page__main">
              main
            </main>
          </div>

        </div>

        <footer className="page__footer">
          footer
        </footer>
      </div>

      <aside className="page__sidebar-secondary">
        sidebar-secondary <br/>
        левый сайдбар для SidebarDrop страниц
      </aside>


    </div>
  )
};

export default ExsamplePage;
