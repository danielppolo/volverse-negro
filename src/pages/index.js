import React, {
  useEffect, useState, useRef, useCallback,
} from 'react'
import '../index.css'
import Layout from '../components/layout'
import SEO from '../components/seo'
import useFigures from '../hooks/use-figures'
import FragmentAA from '../components/text/fragment-aa'
import FragmentAB from '../components/text/fragment-ab'
import FragmentAC from '../components/text/fragment-ac'
import FragmentAD from '../components/text/fragment-ad'
import FragmentAE from '../components/text/fragment-ae'
import FragmentAF from '../components/text/fragment-af'
import FragmentAG from '../components/text/fragment-ag'
import FragmentAH from '../components/text/fragment-ah'
import FragmentAI from '../components/text/fragment-ai'
import FragmentAJ from '../components/text/fragment-aj'
// import FragmentAK from '../components/text/fragment-ak'
import FragmentAL from '../components/text/fragment-al'
import FragmentAM from '../components/text/fragment-am'
import FragmentAN from '../components/text/fragment-an'
// import FragmentAO from '../components/text/fragment-ao'
// import FragmentAP from '../components/text/fragment-ap'
import FragmentAQ from '../components/text/fragment-aq'
import FragmentAR from '../components/text/fragment-ar'
import FragmentAS from '../components/text/fragment-as'
import FragmentAT from '../components/text/fragment-at'
// import FragmentAU from '../components/text/fragment-au'
import FragmentAV from '../components/text/fragment-av'
import FragmentAW from '../components/text/fragment-aw'
import FragmentAX from '../components/text/fragment-ax'
// import FragmentAY from '../components/text/fragment-ay'
import FragmentAZ from '../components/text/fragment-az'
import FragmentBA from '../components/text/fragment-ba'
import FragmentBB from '../components/text/fragment-bb'
import FragmentBC from '../components/text/fragment-bc'
import FragmentBD from '../components/text/fragment-bd'
import FragmentBE from '../components/text/fragment-be'
import FragmentBF from '../components/text/fragment-bf'
import FragmentBG from '../components/text/fragment-bg'
import FragmentBH from '../components/text/fragment-bh'
import FragmentBI from '../components/text/fragment-bi'
import FragmentBJ from '../components/text/fragment-bj'
import FragmentBK from '../components/text/fragment-bk'
import FragmentBL from '../components/text/fragment-bl'
// import FragmentBM from '../components/text/fragment-bm'
// import FragmentBN from '../components/text/fragment-bn'
import FragmentBO from '../components/text/fragment-bo'
import FragmentBP from '../components/text/fragment-bp'
import FragmentBQ from '../components/text/fragment-bq'
import FragmentBR from '../components/text/fragment-br'
import FragmentBS from '../components/text/fragment-bs'
import FragmentBT from '../components/text/fragment-bt'
import FragmentBU from '../components/text/fragment-bu'
import FragmentBV from '../components/text/fragment-bv'
import FragmentBW from '../components/text/fragment-bw'
import FragmentBX from '../components/text/fragment-bx'
import FragmentBY from '../components/text/fragment-by'
import FragmentBZ from '../components/text/fragment-bz'
import FragmentCA from '../components/text/fragment-ca'
import FragmentCB from '../components/text/fragment-cb'
import FragmentCC from '../components/text/fragment-cc'
import FragmentCD from '../components/text/fragment-cd'
import FragmentCE from '../components/text/fragment-ce'
import FragmentCF from '../components/text/fragment-cf'
import FragmentCG from '../components/text/fragment-cg'
import FragmentCH from '../components/text/fragment-ch'
import FragmentCI from '../components/text/fragment-ci'
import FragmentCJ from '../components/text/fragment-cj'
import FragmentCK from '../components/text/fragment-ck'
import FragmentCL from '../components/text/fragment-cl'
import FragmentCM from '../components/text/fragment-cm'
import FragmentCN from '../components/text/fragment-cn'
import FragmentCO from '../components/text/fragment-co'
import FragmentCP from '../components/text/fragment-cp'
import FragmentCQ from '../components/text/fragment-cq'
import FragmentCR from '../components/text/fragment-cr'
import FragmentCS from '../components/text/fragment-cs'
import FragmentCT from '../components/text/fragment-ct'
import FragmentCU from '../components/text/fragment-cu'
import FragmentCV from '../components/text/fragment-cv'
import FragmentCW from '../components/text/fragment-cw'
import FragmentCX from '../components/text/fragment-cx'
import FragmentCY from '../components/text/fragment-cy'
import FragmentCZ from '../components/text/fragment-cz'
import FragmentDA from '../components/text/fragment-da'
import FragmentDB from '../components/text/fragment-db'
import FragmentDC from '../components/text/fragment-dc'
import FragmentDD from '../components/text/fragment-dd'
import FragmentDE from '../components/text/fragment-de'
// import FragmentDF from '../components/text/fragment-df'
import FragmentDG from '../components/text/fragment-dg'
import FragmentDH from '../components/text/fragment-dh'
import FragmentDI from '../components/text/fragment-di'
import FragmentDJ from '../components/text/fragment-dj'
import FragmentDK from '../components/text/fragment-dk'
import FragmentDL from '../components/text/fragment-dl'
import FragmentDM from '../components/text/fragment-dm'
import FragmentDN from '../components/text/fragment-dn'
import FragmentDO from '../components/text/fragment-do'
import FragmentDP from '../components/text/fragment-dp'
import FragmentDQ from '../components/text/fragment-dq'
import FragmentDR from '../components/text/fragment-dr'
import FragmentDS from '../components/text/fragment-ds'
import FragmentDT from '../components/text/fragment-dt'
import FragmentDU from '../components/text/fragment-du'
import FragmentDV from '../components/text/fragment-dv'
import FragmentDW from '../components/text/fragment-dw'
import FragmentDX from '../components/text/fragment-dx'
import VideoAA from '../components/videos/video-aa'
import VideoAB from '../components/videos/video-ab'
import VideoAC from '../components/videos/video-ac'
import VideoAD from '../components/videos/video-ad'
import VideoAE from '../components/videos/video-ae'
import VideoAF from '../components/videos/video-af'
import VideoAG from '../components/videos/video-ag'
import VideoAH from '../components/videos/video-ah'
import VideoAI from '../components/videos/video-ai'
import VideoAJ from '../components/videos/video-aj'
import VideoAK from '../components/videos/video-ak'
import VideoAL from '../components/videos/video-al'
import VideoAM from '../components/videos/video-am'
import VideoAN from '../components/videos/video-an'
import VideoAO from '../components/videos/video-ao'
import VideoAP from '../components/videos/video-ap'
import VideoAQ from '../components/videos/video-aq'
import VideoAR from '../components/videos/video-ar'
import VideoAS from '../components/videos/video-as'
import VideoAT from '../components/videos/video-at'
import VideoAU from '../components/videos/video-au'
import VideoAV from '../components/videos/video-av'
import VideoAW from '../components/videos/video-aw'
import VideoAX from '../components/videos/video-ax'
import VideoAY from '../components/videos/video-ay'
import VideoAZ from '../components/videos/video-az'
import VideoBA from '../components/videos/video-ba'
import VideoBB from '../components/videos/video-bb'
import VideoBC from '../components/videos/video-bc'
import VideoBD from '../components/videos/video-bd'
import VideoBE from '../components/videos/video-be'
import VideoBF from '../components/videos/video-bf'
import VideoBG from '../components/videos/video-bg'
import Refineria from '../components/collections/collection-a'
import Nino from '../components/collections/collection-b'
import Maquinaria from '../components/collections/collection-c'
import Parvadas from '../components/collections/collection-d'
import NinoTurbina from '../components/collections/collection-e'
import NinoPanal from '../components/collections/collection-f'
import Mano from '../components/collections/collection-g'
import Cupulas from '../components/collections/collection-h'
import Palomas from '../components/collections/collection-i'
import Interior from '../components/collections/collection-j'
import Cerro from '../components/collections/collection-k'
import Cera from '../components/collections/collection-l'
import NinoAbeja from '../components/collections/collection-m'
import Panal from '../components/collections/collection-n'
import FuegoRefineria from '../components/collections/collection-ñ'
import Capsulas from '../components/collections/collection-o'
import Aereo from '../components/collections/collection-p'
import Campanario from '../components/collections/collection-q'
import Tortolas from '../components/collections/collection-r'
import Bichos from '../components/collections/collection-s'
import NinoCielo from '../components/collections/collection-t'
import Palmeras from '../components/collections/collection-u'
import NinoCornisa from '../components/collections/collection-v'
import PajarosCEARG from '../components/collections/collection-w'
import Bayas from '../components/collections/collection-x'
import NinoPanalito from '../components/collections/collection-y'
import PajarosCupula from '../components/collections/collection-z'
import Date from '../components/common/date'
import Location from '../components/common/location'
import Cartography from '../components/common/cartography'
import Intro from '../components/common/intro'
import Loading from '../components/common/loading'
import Streaming from '../components/common/streaming'
import useAmbientSound from '../hooks/use-ambient-sound'
import Figures from '../components/common/figures'
import Cursor from '../components/common/cursor'
import Container from '../components/common/container'
import Row from '../components/common/row'
import Column from '../components/common/column'
import Fragment from '../components/common/fragment'
import useMediaLoaded from '../hooks/use-media-loaded'

const IndexPage = () => {
  const [ready, setReady] = useState(false)
  const [video, setVideo] = useState(true)
  const [track, setTrack] = useState(null)
  useAmbientSound((video || track))
  const loaded = useMediaLoaded()
  // useFigures()
  const handleVideoPlay = useCallback(
    () => { setVideo(true) },
    [],
  )
  const handleVideoPause = useCallback(
    () => { setVideo(false) },
    [],
  )

  return (
    <Layout>
      <SEO title="Volverse negro" />
      <Loading
        done={loaded}
        onClick={() => setReady(true)}
      />
      <div>
        <Date />
        <Location />
        <Streaming
          videoId="CWu29PRCUvQ"
          autoplay={ready}
        />
        <Intro />
        <Cartography />
      </div>
      <div>
        <Container>
          <Row>
            <Column>
              <Fragment>
                <FragmentAA />
                <FragmentAB />
                <FragmentAC />
                <FragmentAD />
                <FragmentAE />
              </Fragment>
            </Column>
            <Column>
              <VideoAA onPlay={handleVideoPlay} onPause={handleVideoPause} />
              <VideoAB onPlay={handleVideoPlay} onPause={handleVideoPause} />
              <VideoAC onPlay={handleVideoPlay} onPause={handleVideoPause} />
              <VideoAD onPlay={handleVideoPlay} onPause={handleVideoPause} />
            </Column>
          </Row>
          <Refineria pos="1" />
          <Nino pos="2" />
          <Maquinaria pos="3" />
          <Parvadas pos="4" />
        </Container>
        <Container>
          <Row>
            <Column>
              <Fragment>
                <FragmentAF />
                <FragmentAG />
                <FragmentAH />
                <FragmentAI />
                <FragmentAJ />
                <FragmentAL />
                <FragmentAM />
                <FragmentAN />
                <FragmentAQ />
                <FragmentAR />
                <FragmentAS />
                <FragmentAT />
                <FragmentAV />
                <FragmentAW />
                <FragmentAX />
                <FragmentAZ />
              </Fragment>
            </Column>
            <Column>
              <VideoAE onPlay={handleVideoPlay} onPause={handleVideoPause} />
              <VideoAF onPlay={handleVideoPlay} onPause={handleVideoPause} />
              <VideoAG onPlay={handleVideoPlay} onPause={handleVideoPause} />
              <VideoAH onPlay={handleVideoPlay} onPause={handleVideoPause} />
            </Column>
          </Row>
        </Container>
        <NinoTurbina pos="5" />
        <NinoPanal pos="6" />
        <Mano pos="7" />

        <Container>
          <Row>
            <Column>
              <Fragment>
                <FragmentBA />
                <FragmentBB />
                <FragmentBC />
                <FragmentBD />
                <FragmentBE />
                <FragmentBF />
                <FragmentBG />
                <FragmentBH />
                <FragmentBI />
                <FragmentBJ />
                <FragmentBK />
                <FragmentBL />
              </Fragment>
            </Column>
            <Column>
              <VideoAI onPlay={handleVideoPlay} onPause={handleVideoPause} />
              <VideoAJ onPlay={handleVideoPlay} onPause={handleVideoPause} />
              <VideoAK onPlay={handleVideoPlay} onPause={handleVideoPause} />
              <VideoAL onPlay={handleVideoPlay} onPause={handleVideoPause} />
            </Column>
          </Row>
        </Container>
        <Cupulas pos="8" />
        <Palomas pos="9" />
        <Interior pos="10" />
        <Cerro pos="11" />
        <Container>
          <Row>
            <Column>
              <Fragment>
                <FragmentBO />
                <FragmentBP />
                <FragmentBQ />
                <FragmentBR />
                <FragmentBS />
                <FragmentBT />
                <FragmentBU />
                <FragmentBV />
                <FragmentBW />
                <FragmentBX />
                <FragmentBY />
                <FragmentBZ />
              </Fragment>
            </Column>
            <Column>
              <VideoAM onPlay={handleVideoPlay} onPause={handleVideoPause} />
              <VideoAN onPlay={handleVideoPlay} onPause={handleVideoPause} />
              <VideoAO onPlay={handleVideoPlay} onPause={handleVideoPause} />
              <VideoAP onPlay={handleVideoPlay} onPause={handleVideoPause} />
            </Column>
          </Row>
        </Container>
        <Cera pos="12" />
        <NinoAbeja pos="13" />
        <Panal pos="14" />
        <Container>
          <Row>
            <Column>
              <Fragment>
                <FragmentCA />
                <FragmentCB />
                <FragmentCC />
                <FragmentCD />
                <FragmentCE />
                <FragmentCF />
                <FragmentCG />
                <FragmentCH />
                <FragmentCI />
                <FragmentCJ />
                <FragmentCK />
                <FragmentCL />
                <FragmentCM />
                <FragmentCN />
              </Fragment>
            </Column>
            <Column>
              <VideoAQ onPlay={handleVideoPlay} onPause={handleVideoPause} />
              <VideoAR onPlay={handleVideoPlay} onPause={handleVideoPause} />
              <VideoAS onPlay={handleVideoPlay} onPause={handleVideoPause} />
              <VideoAT onPlay={handleVideoPlay} onPause={handleVideoPause} />
            </Column>
          </Row>
        </Container>
        <FuegoRefineria pos="15" />
        <Capsulas pos="16" />
        <Aereo pos="17" />
        <Campanario pos="18" />
        <Container>
          <Row>
            <Column>
              <Fragment>
                <FragmentCO />
                <FragmentCP />
                <FragmentCQ />
                <FragmentCR />
                <FragmentCS />
                <FragmentCT />
                <FragmentCU />
                <FragmentCV />
                <FragmentCW />
                <FragmentCX />
                <FragmentCY />
              </Fragment>
            </Column>
            <Column>
              <VideoAU onPlay={handleVideoPlay} onPause={handleVideoPause} />
              <VideoAV onPlay={handleVideoPlay} onPause={handleVideoPause} />
              <VideoAW onPlay={handleVideoPlay} onPause={handleVideoPause} />
              <VideoAX onPlay={handleVideoPlay} onPause={handleVideoPause} />
            </Column>
          </Row>
        </Container>
        <Tortolas pos="19" />
        <Bichos pos="20" />
        <NinoCielo pos="21" />
        <Container>
          <Row>
            <Column>
              <Fragment>
                <FragmentCZ />
                <FragmentDA />
                <FragmentDB />
                <FragmentDC />
                <FragmentDD />
                <FragmentDE />
                <FragmentDG />
                <FragmentDH />
                <FragmentDI />
                <FragmentDJ />
                <FragmentDK />
                <FragmentDL />
              </Fragment>
            </Column>
            <Column>
              <VideoAY onPlay={handleVideoPlay} onPause={handleVideoPause} />
              <VideoAZ onPlay={handleVideoPlay} onPause={handleVideoPause} />
              <VideoBA onPlay={handleVideoPlay} onPause={handleVideoPause} />
              <VideoBB onPlay={handleVideoPlay} onPause={handleVideoPause} />
            </Column>
          </Row>
        </Container>
        <Palmeras pos="22" />
        <NinoCornisa pos="23" />
        <PajarosCEARG pos="24" />
        <Container>
          <Row>
            <Column>
              <Fragment>
                <FragmentDM />
                <FragmentDN />
                <FragmentDO />
                <FragmentDP />
                <FragmentDQ />
                <FragmentDR />
                <FragmentDS />
                <FragmentDT />
                <FragmentDU />
                <FragmentDV />
                <FragmentDW />
                <FragmentDX />
              </Fragment>
            </Column>
            <Column>
              <VideoBC onPlay={handleVideoPlay} onPause={handleVideoPause} />
              <VideoBD onPlay={handleVideoPlay} onPause={handleVideoPause} />
              <VideoBE onPlay={handleVideoPlay} onPause={handleVideoPause} />
              <VideoBF onPlay={handleVideoPlay} onPause={handleVideoPause} />
              <VideoBG onPlay={handleVideoPlay} onPause={handleVideoPause} />
            </Column>
          </Row>
        </Container>
        <Bayas pos="25" />
        <NinoPanalito pos="26" />
        <PajarosCupula pos="27" />
      </div>
      <div />
      <Figures />
      <Cursor />
    </Layout>
  )
}

export default IndexPage
