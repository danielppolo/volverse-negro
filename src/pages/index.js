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
  const { current, playback, active } = useTracks()
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

  console.log(current)
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
                <Element name="track-1">
                  <FragmentAA active={current === 1} onClick={() => playback(1)} />
                </Element>
              </Column>
              <Column grow>
                <VideoAA onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
            <Row>
              <Column width={50}>
                <FragmentAB active={current === 1} onClick={() => playback(1, 83)} />
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
                <FragmentAC active={current === 1} onClick={() => playback(1, 147)} />
                <FragmentAD active={current === 1} onClick={() => playback(1, 147)} />
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
                <FragmentAE active={current === 1} onClick={() => playback(1, 204)} />
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
                <Element name="track-2">
                  <FragmentAF active={current === 2} onClick={() => playback(2)} />
                  <FragmentAG active={current === 2} onClick={() => playback(2)} />
                  <FragmentAH active={current === 2} onClick={() => playback(2)} />
                  <FragmentAI active={current === 2} onClick={() => playback(2)} />
                  <FragmentAJ active={current === 2} onClick={() => playback(2)} />
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
                <FragmentAL active={current === 2} onClick={() => playback(2, 39)} />
                <FragmentAM active={current === 2} onClick={() => playback(2, 39)} />
                <FragmentAN active={current === 2} onClick={() => playback(2, 39)} />
                <FragmentAQ active={current === 2} onClick={() => playback(2, 39)} />
                <FragmentAR active={current === 2} onClick={() => playback(2, 39)} />
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
                <FragmentAR active={current === 2} onClick={() => playback(2, 69)} />
                <FragmentAS active={current === 2} onClick={() => playback(2, 69)} />
                <FragmentAT active={current === 2} onClick={() => playback(2, 69)} />
                <FragmentAV active={current === 2} onClick={() => playback(2, 69)} />
              </Column>
              <Column>
                <VideoAG onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
            <Row>
              <Column width={50}>
                <FragmentAW active={current === 2} onClick={() => playback(2, 128)} />
                <FragmentAX active={current === 2} onClick={() => playback(2, 128)} />
                <FragmentAY active={current === 2} onClick={() => playback(2, 128)} />
                <FragmentAZ active={current === 2} onClick={() => playback(2, 128)} />
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
                <Element name="track-3">
                  <FragmentBA active={current === 3} onClick={() => playback(3)} />
                  <FragmentBB active={current === 3} onClick={() => playback(3)} />
                  <FragmentBC active={current === 3} onClick={() => playback(3)} />
                  <FragmentBD active={current === 3} onClick={() => playback(3)} />
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
                <FragmentBE active={current === 3} onClick={() => playback(3, 92)} />
                <FragmentBF active={current === 3} onClick={() => playback(3, 92)} />
                <FragmentBG active={current === 3} onClick={() => playback(3, 92)} />
                <FragmentBH active={current === 3} onClick={() => playback(3, 92)} />
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
                <FragmentBI active={current === 3} onClick={() => playback(3, 122)} />
                <FragmentBJ active={current === 3} onClick={() => playback(3, 122)} />
                <FragmentBK active={current === 3} onClick={() => playback(3, 122)} />
                <FragmentBL active={current === 3} onClick={() => playback(3, 122)} />
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
                <Element name="track-4">
                  <FragmentBO active={current === 4} onClick={() => playback(4)} />
                  <FragmentBP active={current === 4} onClick={() => playback(4)} />
                  <FragmentBQ active={current === 4} onClick={() => playback(4)} />
                  <FragmentBR active={current === 4} onClick={() => playback(4)} />
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
                <FragmentBS active={current === 4} onClick={() => playback(4)} />
                <FragmentBT active={current === 4} onClick={() => playback(4)} />
                <FragmentBU active={current === 4} onClick={() => playback(4)} />
                <FragmentBV active={current === 4} onClick={() => playback(4)} />
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
                <FragmentBW active={current === 4} onClick={() => playback(4)} />
                <FragmentBX active={current === 4} onClick={() => playback(4)} />
                <FragmentBY active={current === 4} onClick={() => playback(4)} />
                <FragmentBZ active={current === 4} onClick={() => playback(4)} />
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
                <Element name="track-5">
                  <FragmentCA active={current === 5} onClick={() => playback(5)} />
                  <FragmentCB active={current === 5} onClick={() => playback(5)} />
                  <FragmentCC active={current === 5} onClick={() => playback(5)} />
                  <FragmentCD active={current === 5} onClick={() => playback(5)} />
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
                <FragmentCE active={current === 5} onClick={() => playback(5)} />
                <FragmentCF active={current === 5} onClick={() => playback(5)} />
                <FragmentCG active={current === 5} onClick={() => playback(5)} />
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
                <FragmentCH active={current === 5} onClick={() => playback(5)} />
                <FragmentCI active={current === 5} onClick={() => playback(5)} />
                <FragmentCJ active={current === 5} onClick={() => playback(5)} />
                <FragmentCK active={current === 5} onClick={() => playback(5)} />
                <FragmentCL active={current === 5} onClick={() => playback(5)} />
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
                <FragmentCM active={current === 5} onClick={() => playback(5)} />
                <FragmentCN active={current === 5} onClick={() => playback(5)} />
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
                <Element name="track-6">
                  <FragmentCO active={current === 6} onClick={() => playback(6)} />
                  <FragmentCP active={current === 6} onClick={() => playback(6)} />
                  <FragmentCQ active={current === 6} onClick={() => playback(6)} />
                  <FragmentCR active={current === 6} onClick={() => playback(6)} />
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
                <FragmentCS active={current === 6} onClick={() => playback(6)} />
                <FragmentCT active={current === 6} onClick={() => playback(6)} />
                <FragmentCU active={current === 6} onClick={() => playback(6)} />
                <FragmentCV active={current === 6} onClick={() => playback(6)} />
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
                <FragmentCW active={current === 6} onClick={() => playback(6)} />
                <FragmentCX active={current === 6} onClick={() => playback(6)} />
                <FragmentCY active={current === 6} onClick={() => playback(6)} />
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
                <Element name="track-7">
                  <FragmentCZ active={current === 7} onClick={() => playback(7)} />
                  <FragmentDA active={current === 7} onClick={() => playback(7)} />
                  <FragmentDB active={current === 7} onClick={() => playback(7)} />
                  <FragmentDC active={current === 7} onClick={() => playback(7)} />
                  <FragmentDD active={current === 7} onClick={() => playback(7)} />
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
                <FragmentDE active={current === 7} onClick={() => playback(7)} />
                <FragmentDG active={current === 7} onClick={() => playback(7)} />
                <FragmentDH active={current === 7} onClick={() => playback(7)} />
                <FragmentDI active={current === 7} onClick={() => playback(7)} />
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
                <FragmentDJ active={current === 7} onClick={() => playback(7)} />
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
                <FragmentDK active={current === 7} onClick={() => playback(7)} />
                <FragmentDL active={current === 7} onClick={() => playback(7)} />
                <FragmentDM active={current === 7} onClick={() => playback(7)} />
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
                <Element name="track-8">
                  <FragmentDN active={current === 8} onClick={() => playback(8)} />
                  <FragmentDO active={current === 8} onClick={() => playback(8)} />
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
                <FragmentDP active={current === 8} onClick={() => playback(8)} />
                <FragmentDQ active={current === 8} onClick={() => playback(8)} />
                <FragmentDR active={current === 8} onClick={() => playback(8)} />
                <FragmentDS active={current === 8} onClick={() => playback(8)} />
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
                <FragmentDT active={current === 8} onClick={() => playback(8)} />
                <FragmentDU active={current === 8} onClick={() => playback(8)} />
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
                <FragmentDV active={current === 8} onClick={() => playback(8)} />
              </Column>
              <Column>
                <VideoBE onPlay={handleVideoPlay} onPause={handleVideoPause} />
                <VideoBF onPlay={handleVideoPlay} onPause={handleVideoPause} />
              </Column>
            </Row>
            <Row>
              <Column width={50}>
                <FragmentDW active={current === 8} onClick={() => playback(8)} />
                <FragmentDX active={current === 8} onClick={() => playback(8)} />
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
        {/* {
          current && <Playback onClick={playback} active={active} />
        } */}
      </Layout>
    </ParallaxProvider>
  )
}

export default IndexPage
