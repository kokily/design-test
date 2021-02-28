import { useEffect, useRef } from 'react';

function useMap() {
  const kakaoMap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (kakaoMap && kakaoMap.current) {
      const coords = new (window as any).daum.maps.LatLng(37.5146843299638, 127.06058006215);
      const options = { center: coords, level: 2 };
      const map = new (window as any).daum.maps.Map(kakaoMap.current, options);
      const marker = new (window as any).daum.maps.Marker({ position: coords, map });
      const mapTypeControl = new (window as any).daum.maps.MapTypeControl();
      const zoomControl = new (window as any).daum.maps.ZoomControl();

      // 맵 중앙으로 이동
      map.relayout();
      map.setCenter(coords);
      marker.setPosition(coords);
      map.addControl(mapTypeControl, (window as any).kakao.maps.ControlPosition.TOPRIGHT);
      map.addControl(zoomControl, (window as any).daum.maps.ControlPosition.RIGHT);
    }
  }, [kakaoMap]);

  return kakaoMap;
}

export default useMap;
