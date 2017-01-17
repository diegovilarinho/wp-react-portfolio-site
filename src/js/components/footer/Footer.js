import React from 'react';

export default class Footer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <footer id="colophon" className="site-footer">
		<div className="ish-container-fluid" style={{backgroundColor: '#314a5b'}}>
			<div className="ish-container-inner">
				<div className="ish-row">

					<div className="ish-footer ish-col-xs-offset-1 ish-col-xs-10">

						<div className="ish-social-box ish-widget-element ish-row ish-center-xs">
							<span className="ish-col-xs-4 ish-col-sm-1 ish-twitter"><a href="#"><i className="ish-icon-twitter"></i></a></span>
							<span className="ish-col-xs-4 ish-col-sm-1 ish-behance"><a href="#"><i className="ish-icon-behance"></i></a></span>
							<span className="ish-col-xs-4 ish-col-sm-1 ish-dribbble"><a href="#"><i className="ish-icon-dribbble"></i></a></span>
							<span className="ish-col-xs-4 ish-col-sm-1 ish-instagram"><a href="#"><i className="ish-icon-instagram"></i></a></span>
							<span className="ish-col-xs-4 ish-col-sm-1 ish-gplus"><a href="#"><i className="ish-icon-gplus"></i></a></span>
							<span className="ish-col-xs-4 ish-col-sm-1 ish-facebook"><a href="#"><i className="ish-icon-facebook"></i></a></span>
						</div>

						<div className="site-info ish-legals ish-widget-element">
							Orgulhosamente Desenvolvido com a <a href="https://wordpress.org/" target="_blank" className="ish-underline">API do WordPress</a>
						</div>
					</div>

					<div className="ish-back-to-top ish-widget-element ish-col-xs-1">
						<a href="#page" className="ish-txt-color3"><span>Voltar ao Topo</span><i className="ish-icon-right-small"></i></a>
					</div>

				</div>
			</div>
		</div>
      </footer>
    );
  }
}
