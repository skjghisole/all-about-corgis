import React from "react"
import Layout from '../components/Layout'
import ShowcaseContainer from '../components/ShowcaseContainer'

import SEO from "../components/seo"

import corgi1 from '../assets/images/corgi1.jpg'
import corgi2 from '../assets/images/corgi2.jpg'
import corgi3 from '../assets/images/corgi3.jpg'
import corgi4 from '../assets/images/corgi4.jpg'

export default () => <Layout>
	<SEO />
	I love corgis!
	<ShowcaseContainer>
		<img src={corgi1} alt={'Cute corgi'} width={'300px'} height={'300px'}/>
		<img src={corgi2} alt={'Corgis are super intelligent'} width={'300px'} height={'300px'}/>
		<img src={corgi3} alt={'I just want a corgi'} width={'300px'} height={'300px'}/>
		<img src={corgi4} alt={'C O R G I!'} width={'300px'} height={'300px'}/>
	</ShowcaseContainer>
</Layout>