function Footer() {
   return (
      <footer className="page-footer orange darken-4">
         <div className="footer-copyright">
            <div className="container">
               by zanozzzza © {new Date().getFullYear()}
               <a className="grey-text text-lighten-4 right" href="#!">
                  Repository
               </a>
            </div>
         </div>
      </footer>
   );
}
export {Footer};
