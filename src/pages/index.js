import React, {
  useEffect, useState, useRef, useCallback,
} from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import '../index.css'
import { Element } from 'react-scroll'
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
import FragmentAY from '../components/text/fragment-ay'
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
import Posters from '../components/common/posters'
import PostersIntro from '../components/common/posters-intro'
import Musicians from '../components/common/musicians'
import MusiciansIntro from '../components/common/musicians-intro'
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
import Empty from '../components/common/empty'
import Title from '../components/common/title'
import useMediaLoaded from '../hooks/use-media-loaded'
import useTracks from '../hooks/use-tracks'
import Welcome from '../components/common/welcome'
import Playback from '../components/common/playback'
import ZoomA from '../components/zooms/zoom-a'
import ZoomB from '../components/zooms/zoom-b'
import ZoomC from '../components/zooms/zoom-c'
import ZoomD from '../components/zooms/zoom-d'
import useStreaming from '../hooks/use-streaming'
import FragmentDF from '../components/text/fragment-df'

const IndexPage = () => {
  const [ready, setReady] = useState(false)
  const [playing, setPlaying] = useState(true)
  const { font, video, image } = useMediaLoaded()
  useStreaming('0iit6c3h-Qs', [
    'streaming-1',
    'streaming-2',
    'streaming-3',
    'streaming-4',
  ], ready)
  const {
    current, currentSection, playback, active,
  } = useTracks()
  useAmbientSound((playing || current))
  const stamp = useFigures(ready)

  const handleVideoPlay = useCallback(
    () => { setPlaying(true) },
    [],
  )
  const handleVideoPause = useCallback(
    () => { setPlaying(false) },
    [],
  )
  const isActive = useCallback(
    (paragraph, section) => current === paragraph && section === currentSection,
    [current, currentSection],
  )

  console.log(current, currentSection)
  return (
    <ParallaxProvider>
      <Layout>
        <SEO title="Volverse negro" />
        <Loading
          fontReady={font}
          done={(font && video && image)}
          onClick={() => setReady(true)}
        />
        <div>
          <Welcome />
          <Streaming id="streaming-1" />
          <Intro />
          <Empty />
          <Cartography onClick={stamp} />
        </div>
        <div>
          <Container>
            <Title>El valle inquietante</Title>
            <Row>
              <Column width={50}>
                <Element name="track-1-0">
                  <FragmentAA
                    active={isActive(1, 0)}
                    onClick={() => playback(1)}
                  />
                </Element>
              </Column>
              <Column grow>
                <VideoAA onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
            <Row>
              <Column width={50}>
                <Element name="track-1-83">
                  <FragmentAB
                    active={isActive(1, 83)}
                    onClick={() => playback(1, 83)}
                  />
                </Element>
              </Column>
              <Column grow>
                <VideoAB onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
          </Container>
          <Refineria pos="1" />
          <Container>
            <Row>
              <Column width={50}>
                <Element name="track-1-147">
                  <FragmentAC
                    active={isActive(1, 147)}
                    onClick={() => playback(1, 147)}
                  />
                  <FragmentAD
                    active={isActive(1, 147)}
                    onClick={() => playback(1, 147)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoAC onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
          </Container>
          <Nino pos="2" />
          <Container>
            <Row>
              <Column width={50}>
                <Element name="track-1-204">
                  <FragmentAE
                    active={isActive(1, 204)}
                    onClick={() => playback(1, 204)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoAD onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
          </Container>
          <Maquinaria pos="3" />
          <Container>
            <Row>
              <Column width={50}>
                <Element name="track-2-0">
                  <FragmentAF
                    active={isActive(2, 0)}
                    onClick={() => playback(2)}
                  />
                  <FragmentAG
                    active={isActive(2, 0)}
                    onClick={() => playback(2)}
                  />
                  <FragmentAH
                    active={isActive(2, 0)}
                    onClick={() => playback(2)}
                  />
                  <FragmentAI
                    active={isActive(2, 0)}
                    onClick={() => playback(2)}
                  />
                  <FragmentAJ
                    active={isActive(2, 0)}
                    onClick={() => playback(2)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoAE onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
          </Container>
          <Parvadas pos="4" />
          <Container>
            <Row>
              <Column width={50}>
                <Element name="track-2-39">
                  <FragmentAL
                    active={isActive(2, 39)}
                    onClick={() => playback(2, 39)}
                  />
                  <FragmentAM
                    active={isActive(2, 39)}
                    onClick={() => playback(2, 39)}
                  />
                  <FragmentAN
                    active={isActive(2, 39)}
                    onClick={() => playback(2, 39)}
                  />
                  <FragmentAQ
                    active={isActive(2, 39)}
                    onClick={() => playback(2, 39)}
                  />
                  <FragmentAR
                    active={isActive(2, 39)}
                    onClick={() => playback(2, 39)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoAF onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
          </Container>
          <NinoTurbina pos="5" />
          <Container>
            <Row>
              <Column width={50}>
                <Element name="track-2-69">
                  <FragmentAR
                    active={isActive(2, 69)}
                    onClick={() => playback(2, 69)}
                  />
                  <FragmentAS
                    active={isActive(2, 69)}
                    onClick={() => playback(2, 69)}
                  />
                  <FragmentAT
                    active={isActive(2, 69)}
                    onClick={() => playback(2, 69)}
                  />
                  <FragmentAV
                    active={isActive(2, 69)}
                    onClick={() => playback(2, 69)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoAG onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
            <Row>
              <Column width={50}>
                <Element name="track-2-128">
                  <FragmentAW
                    active={isActive(2, 128)}
                    onClick={() => playback(2, 128)}
                  />
                  <FragmentAX
                    active={isActive(2, 128)}
                    onClick={() => playback(2, 128)}
                  />
                  <FragmentAY
                    active={isActive(2, 128)}
                    onClick={() => playback(2, 128)}
                  />
                  <FragmentAZ
                    active={isActive(2, 128)}
                    onClick={() => playback(2, 128)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoAH onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
          </Container>
          <NinoPanal pos="6" />

          <Streaming id="streaming-2" />

          <Container>
            <Row>
              <Column width={50}>
                <Element name="track-3-0">
                  <FragmentBA
                    active={isActive(3, 0)}
                    onClick={() => playback(3)}
                  />
                  <FragmentBB
                    active={isActive(3, 0)}
                    onClick={() => playback(3)}
                  />
                  <FragmentBC
                    active={isActive(3, 0)}
                    onClick={() => playback(3)}
                  />
                  <FragmentBD
                    active={isActive(3, 0)}
                    onClick={() => playback(3)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoAI onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
          </Container>
          <Mano pos="7" />
          <Container>
            <Row>
              <Column width={50}>
                <Element name="track-3-92">
                  <FragmentBE
                    active={isActive(3, 92)}
                    onClick={() => playback(3, 92)}
                  />
                  <FragmentBF
                    active={isActive(3, 92)}
                    onClick={() => playback(3, 92)}
                  />
                  <FragmentBG
                    active={isActive(3, 92)}
                    onClick={() => playback(3, 92)}
                  />
                  <FragmentBH
                    active={isActive(3, 92)}
                    onClick={() => playback(3, 92)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoAJ onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
          </Container>
          <Cupulas pos="8" />
          <Container>
            <Row>
              <Column width={50}>
                <Element name="track-3-122">
                  <FragmentBI
                    active={isActive(3, 122)}
                    onClick={() => playback(3, 122)}
                  />
                  <FragmentBJ
                    active={isActive(3, 122)}
                    onClick={() => playback(3, 122)}
                  />
                  <FragmentBK
                    active={isActive(3, 122)}
                    onClick={() => playback(3, 122)}
                  />
                  <FragmentBL
                    active={isActive(3, 122)}
                    onClick={() => playback(3, 122)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoAK onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
          </Container>
          <Palomas pos="9" />
          <Container>
            <Row>
              <Column width={50}>
                <Element name="track-4-0">
                  <FragmentBO
                    active={isActive(4, 0)}
                    onClick={() => playback(4)}
                  />
                  <FragmentBP
                    active={isActive(4, 0)}
                    onClick={() => playback(4)}
                  />
                  <FragmentBQ
                    active={isActive(4, 0)}
                    onClick={() => playback(4)}
                  />
                  <FragmentBR
                    active={isActive(4, 0)}
                    onClick={() => playback(4)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoAL onPlay={handleVideoPlay} onPause={handleVideoPause} />
                <VideoAM onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
          </Container>
          <Interior pos="10" />
          <Container>
            <Row>
              <Column width={50}>
                <Element name="track-4-98">
                  <FragmentBS
                    active={isActive(4, 98)}
                    onClick={() => playback(4, 98)}
                  />
                  <FragmentBT
                    active={isActive(4, 98)}
                    onClick={() => playback(4, 98)}
                  />
                  <FragmentBU
                    active={isActive(4, 98)}
                    onClick={() => playback(4, 98)}
                  />
                  <FragmentBV
                    active={isActive(4, 98)}
                    onClick={() => playback(4, 98)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoAN onPlay={handleVideoPlay} onPause={handleVideoPause} />
                <VideoAO onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
          </Container>
          <Cerro pos="11" />
          <Container>
            <Row>
              <Column width={50}>
                <Element name="track-4-175">
                  <FragmentBW
                    active={isActive(4, 175)}
                    onClick={() => playback(4, 175)}
                  />
                  <FragmentBX
                    active={isActive(4, 175)}
                    onClick={() => playback(4, 175)}
                  />
                  <FragmentBY
                    active={isActive(4, 175)}
                    onClick={() => playback(4, 175)}
                  />
                  <FragmentBZ
                    active={isActive(4, 175)}
                    onClick={() => playback(4, 175)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoAP onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
          </Container>
          <Cera pos="12" />

          <Streaming id="streaming-3" />

          <Container>
            <Row>
              <Column width={50}>
                <Element name="track-5-0">
                  <FragmentCA
                    active={isActive(5, 0)}
                    onClick={() => playback(5)}
                  />
                  <FragmentCB
                    active={isActive(5, 0)}
                    onClick={() => playback(5)}
                  />
                  <FragmentCC
                    active={isActive(5, 0)}
                    onClick={() => playback(5)}
                  />
                  <FragmentCD
                    active={isActive(5, 0)}
                    onClick={() => playback(5)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoAQ onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
          </Container>
          <NinoAbeja pos="13" />
          <Container>
            <Row>
              <Column width={50}>
                <Element name="track-5-57">
                  <FragmentCE
                    active={isActive(5, 57)}
                    onClick={() => playback(5, 57)}
                  />
                  <FragmentCF
                    active={isActive(5, 57)}
                    onClick={() => playback(5, 57)}
                  />
                  <FragmentCG
                    active={isActive(5, 57)}
                    onClick={() => playback(5, 57)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoAR onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
          </Container>
          <Panal pos="14" />
          <Container>
            <Row>
              <Column width={50}>
                <Element name="track-5-111">
                  <FragmentCH
                    active={isActive(5, 111)}
                    onClick={() => playback(5, 111)}
                  />
                  <FragmentCI
                    active={isActive(5, 111)}
                    onClick={() => playback(5, 111)}
                  />
                  <FragmentCJ
                    active={isActive(5, 111)}
                    onClick={() => playback(5, 111)}
                  />
                  <FragmentCK
                    active={isActive(5, 111)}
                    onClick={() => playback(5, 111)}
                  />
                  <FragmentCL
                    active={isActive(5, 111)}
                    onClick={() => playback(5, 111)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoAS onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
          </Container>
          <FuegoRefineria pos="15" />
          <Container>
            <Row>
              <Column width={50}>
                <Element name="track-5-125">
                  <FragmentCM
                    active={isActive(5, 125)}
                    onClick={() => playback(5, 125)}
                  />
                  <FragmentCN
                    active={isActive(5, 125)}
                    onClick={() => playback(5, 125)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoAT onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
          </Container>
          <Capsulas pos="16" />
          <Container>
            <Row>
              <Column width={50}>
                <Element name="track-6-0">
                  <FragmentCO
                    active={isActive(6, 0)}
                    onClick={() => playback(6)}
                  />
                  <FragmentCP
                    active={isActive(6, 0)}
                    onClick={() => playback(6)}
                  />
                  <FragmentCQ
                    active={isActive(6, 0)}
                    onClick={() => playback(6)}
                  />
                  <FragmentCR
                    active={isActive(6, 0)}
                    onClick={() => playback(6)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoAU onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
          </Container>
          <Aereo pos="17" />
          <Container>
            <Row>
              <Column width={50}>
                <Element name="track-6-132">
                  <FragmentCS
                    active={isActive(6, 132)}
                    onClick={() => playback(6, 132)}
                  />
                  <FragmentCT
                    active={isActive(6, 132)}
                    onClick={() => playback(6, 132)}
                  />
                  <FragmentCU
                    active={isActive(6, 132)}
                    onClick={() => playback(6, 132)}
                  />
                  <FragmentCV
                    active={isActive(6, 132)}
                    onClick={() => playback(6, 132)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoAV onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
          </Container>
          <Campanario pos="18" />
          <Container>
            <Row>
              <Column width={50}>
                <Element name="track-6-167">
                  <FragmentCW
                    active={isActive(6, 167)}
                    onClick={() => playback(6, 167)}
                  />
                  <FragmentCX
                    active={isActive(6, 167)}
                    onClick={() => playback(6, 167)}
                  />
                  <FragmentCY
                    active={isActive(6, 167)}
                    onClick={() => playback(6, 167)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoAW onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
          </Container>
          <Tortolas pos="19" />

          <Streaming id="streaming-4" />

          <Container>
            <Row>
              <Column width={50}>
                <Element name="track-7-0">
                  <FragmentCZ
                    active={isActive(7, 0)}
                    onClick={() => playback(7)}
                  />
                  <FragmentDA
                    active={isActive(7, 0)}
                    onClick={() => playback(7)}
                  />
                  <FragmentDB
                    active={isActive(7, 0)}
                    onClick={() => playback(7)}
                  />
                  <FragmentDC
                    active={isActive(7, 0)}
                    onClick={() => playback(7)}
                  />
                  <FragmentDD
                    active={isActive(7, 0)}
                    onClick={() => playback(7)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoAX onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
          </Container>
          <Bichos pos="20" />
          <Container>
            <Row>
              <Column width={50}>
                <Element name="track-7-68">
                  <FragmentDE
                    active={isActive(7, 68)}
                    onClick={() => playback(7, 68)}
                  />
                  <FragmentDF
                    active={isActive(7, 68)}
                    onClick={() => playback(7, 68)}
                  />
                  <FragmentDG
                    active={isActive(7, 68)}
                    onClick={() => playback(7, 68)}
                  />
                  <FragmentDH
                    active={isActive(7, 68)}
                    onClick={() => playback(7, 68)}
                  />
                  <FragmentDI
                    active={isActive(7, 68)}
                    onClick={() => playback(7, 68)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoAY onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
          </Container>
          <NinoCielo pos="21" />
          <Container>
            <Row>
              <Column width={50}>
                <Element name="track-7-149">
                  <FragmentDJ
                    active={isActive(7, 149)}
                    onClick={() => playback(7, 149)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoAZ onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
          </Container>
          <Palmeras pos="22" />
          <Container>
            <Row>
              <Column width={50}>
                <Element name="track-7-193">
                  <FragmentDK
                    active={isActive(7, 193)}
                    onClick={() => playback(7, 193)}
                  />
                  <FragmentDL
                    active={isActive(7, 193)}
                    onClick={() => playback(7, 193)}
                  />
                  <FragmentDM
                    active={isActive(7, 193)}
                    onClick={() => playback(7, 193)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoBA onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
          </Container>
          <NinoCornisa pos="23" />
          <Container>
            <Row>
              <Column width={50}>
                <Element name="track-8-0">
                  <FragmentDN
                    active={isActive(8, 0)}
                    onClick={() => playback(8)}
                  />
                  <FragmentDO
                    active={isActive(8, 0)}
                    onClick={() => playback(8)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoBB onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
          </Container>
          <PajarosCEARG pos="24" />
          <Container>
            <Row>
              <Column width={50}>
                <Element name="track-8-51">
                  <FragmentDP
                    active={isActive(8, 51)}
                    onClick={() => playback(8, 51)}
                  />
                  <FragmentDQ
                    active={isActive(8, 51)}
                    onClick={() => playback(8, 51)}
                  />
                  <FragmentDR
                    active={isActive(8, 51)}
                    onClick={() => playback(8, 51)}
                  />
                  <FragmentDS
                    active={isActive(8, 51)}
                    onClick={() => playback(8, 51)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoBC onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
          </Container>
          <Bayas pos="25" />
          <Container>
            <Row>
              <Column width={50}>
                <Element name="track-8-120">
                  <FragmentDT
                    active={isActive(8, 120)}
                    onClick={() => playback(8, 120)}
                  />
                  <FragmentDU
                    active={isActive(8, 120)}
                    onClick={() => playback(8, 120)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoBD onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
          </Container>
          <NinoPanalito pos="26" />
          <Container>
            <Row>
              <Column width={50}>
                <Element name="track-8-133">
                  <FragmentDV
                    active={isActive(8, 133)}
                    onClick={() => playback(8, 133)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoBE onPlay={handleVideoPlay} onPause={handleVideoPause} />
                <VideoBF onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
            <Row>
              <Column width={50}>
                <Element name="track-8-133">
                  <FragmentDW
                    active={isActive(8, 133)}
                    onClick={() => playback(8, 133)}
                  />
                  <FragmentDX
                    active={isActive(8, 133)}
                    onClick={() => playback(8, 133)}
                  />
                </Element>
              </Column>
              <Column>
                <VideoBG onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
          </Container>
          <PajarosCupula pos="27" />
        </div>
        <div>
          <MusiciansIntro />
          <Musicians />
        </div>
        <div>
          <PostersIntro />
          <Posters />
        </div>
        <Figures />
        <ZoomA
          onPlay={handleVideoPlay}
          onPause={handleVideoPause}
          selector="#anchor-zoom-a"
        />
        <ZoomB
          onPlay={handleVideoPlay}
          onPause={handleVideoPause}
          selector="#anchor-zoom-b"
        />
        <ZoomC
          onPlay={handleVideoPlay}
          onPause={handleVideoPause}
          selector="#anchor-zoom-c"
        />
        <ZoomD
          onPlay={handleVideoPlay}
          onPause={handleVideoPause}
          selector="#anchor-zoom-d"
        />
        {
          ready && <Cursor />
        }
      </Layout>
    </ParallaxProvider>
  )
}

export default IndexPage
