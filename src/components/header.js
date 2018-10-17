import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import logo from '../images/logo.svg';

const HeaderWrapper = styled.div`
	background: transparent;
	margin-bottom: 1.45rem;
	overflow: hidden;
	position: relative;
	height: 70vh;
	h1 {
		img {
			max-width: 70px;
			width: 100%;
		}
	}
`;
const HeaderContainer = styled.div`
	margin: 0 auto;
	max-width: 960px;
	padding: 1.45rem 1.0875rem;
	position: relative;
	z-index: 2;
`;

export default class Header extends Component {
	componentDidUpdate(prevProps, prevState) {
		console.log(this.props);
		if (this.props.location.pathname === '/') {
			this.wrapper.animate([ { height: '20vh' }, { height: '70vh' } ], {
				duration: 300,
				fill: 'forwards',
				easing: 'cubic-bezier(0.86,0,0.07,1)',
				iteration: 1
			});
		} else {
			this.wrapper.animate([ { height: '70vh' }, { height: '20vh' } ], {
				duration: 300,
				fill: 'forwards',
				easing: 'cubic-bezier(0.86,0,0.07,1)',
				iteration: 1
			});
		}
	}
	render() {
		const { siteTitle, imgBg } = this.props;
		return (
			<HeaderWrapper ref={(wrapper) => (this.wrapper = ReactDOM.findDOMNode(wrapper))}>
				<HeaderContainer>
					<h1>
						<Link
							to="/"
							style={{
								color: 'white',
								textDecoration: 'none'
							}}
						>
							<img src={logo} alt="logo arthur morisson" />
							{siteTitle}
						</Link>
					</h1>
					<nav>
						<ul>
							<li>
								<Link to="/">Accueil</Link>
							</li>
							<li>
								<Link to="/about">Compétences</Link>
							</li>
						</ul>
					</nav>
				</HeaderContainer>
				<Img
					style={{
						position: 'absolute',
						left: 0,
						top: 0,
						width: '100%',
						height: '100%'
					}}
					sizes={imgBg}
				/>
			</HeaderWrapper>
		);
	}
}
