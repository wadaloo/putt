import * as React from 'react';
import * as THREE from 'three';

import { StyleProps } from '../ui';
import { styled } from 'styletron-react';

export interface GameProps extends StyleProps {
}

interface GameState {
}

type Props = GameProps;
type State = GameState;

class Game_ extends React.PureComponent<Props, State> {
  constructor(props?: Props, context?: any) {
    super(props, context);
  }

  private renderer_: THREE.Renderer;
  private scene_: THREE.Scene;
  private camera_: THREE.Camera;

  private containerRef_: HTMLDivElement;
  private bindContainerRef_ = (containerRef: HTMLDivElement) => {
    this.containerRef_ = containerRef;
  };

  private canvasRef_: HTMLCanvasElement;
  private bindCanvasRef_ = (containerRef: HTMLCanvasElement) => {
    this.canvasRef_ = containerRef;
    this.setup_();
  };

  private currentSize_ = () => {
    const { width, height } = this.containerRef_.getBoundingClientRect();
    return new THREE.Vector2(width, height);
  }

  private setup_ = () => {
    this.renderer_ = new THREE.WebGLRenderer({
      canvas: this.canvasRef_,
      antialias: true
    });

    this.scene_ = new THREE.Scene();
    requestAnimationFrame(this.tick_);
  };

  private lastSize_: THREE.Vector2 = new THREE.Vector2(0, 0);

  private stopped_ = false;
  private tick_ = () => {
    if(this.stopped_) return;

    const currentSize = this.currentSize_();

    if(!this.lastSize_.equals(currentSize)) {
      const { x, y } = currentSize;
      this.camera_ = new THREE.PerspectiveCamera(70, y / x, 0.01, 10000);
      this.renderer_.setSize(x, y);
      this.lastSize_ = currentSize;
    }

    this.renderer_.render(this.scene_, this.camera_);

    requestAnimationFrame(this.tick_);
  };

  componentWillUnmount() {
    this.stopped_ = true;
  }

  render() {
    const {
      props,
      state,
      bindCanvasRef_,
      bindContainerRef_
    } = this;

    const { className, style } = props;

    return (
      <div ref={bindContainerRef_} className={className} style={style}>
        <canvas ref={bindCanvasRef_} />
      </div>
    );
  }
}

export const Game = styled<HTMLDivElement, Props, Props>(Game_ as any, {
  width: '100%',
  height: '100%',
  overflow: 'hidden'
});