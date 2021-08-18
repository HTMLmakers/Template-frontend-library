import { useState, useEffect } from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import {AppActionCreator} from "../../reducers/app/app";
import {getOpenSidebarDropClassNames, getSlidePageGoBackPath} from "../../reducers/app/selectors";

import {SidebarDropClassName} from "../../components/layout/SidebarDrop/SidebarDrop";

//TODO: объединить с нижним
export const useWindowDimensions = () => {
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth);
  const [currentHeight, setCurrentHeight] = useState(window.innerHeight);

  const updateDimensions = () => {
    setCurrentWidth(window.innerWidth);
    setCurrentHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return [currentWidth, currentHeight];
};

export const useElementDimensions = (elementRef) => {

  const [currentWidth, setCurrentWidth] = useState(elementRef ? null : window.innerWidth);
  const [currentHeight, setCurrentHeight] = useState(elementRef? null: window.innerHeight);

  useEffect(() => {
    setCurrentWidth(elementRef.current?.clientWidth);
    setCurrentHeight(elementRef.current?.clientHeight);
  }, [elementRef])

  const updateDimensions = () => {
    setCurrentWidth(elementRef ? elementRef.current?.clientWidth : window.innerWidth);
    setCurrentHeight(elementRef ? elementRef.current?.clientHeight : window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [elementRef]);

  return [currentWidth, currentHeight];
};

/**
 * Call hook passing in the ref and a function to call on outside click
 * example: useOnClickOutside(ref, () => setModalOpen(false));
 * */

export const useOnClickOutside = (ref, handler) => {
  useEffect(
    () => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    },
    // Add ref and handler to effect dependencies
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]
  );
};

/**
 * Хук возвращает колбэк, который меняет location и открывает страницу в слайде.
 * Сохраняет slidePageGoBackPath для закрытия
 * пример: const handleSlidePage = useHandleSlidePage(AppRoute.HOUSES);
 *         handleClick={() => handleSlidePage(`${AppRoute.HOUSES}/123`)}
 * */
export const useHandleSlidePage = (goBackPath) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSlideOpen = useHandleSidebarDropShowing(SidebarDropClassName.SLIDE_PAGE, true);

  return (pathName) => {
    if (goBackPath) dispatch(AppActionCreator.setSlidePageGoBackPath(goBackPath));
    history.push(pathName);
    handleSlideOpen();
    document.body.classList.add('overlay');
  }
};

/**
 * Хук возвращает колбэк, который делает toggle SidebarDrop - любая шторка,
 * для SidebarDrop - `slide-page` при закрытии возвращает на slidePageGoBackPath
 * пример: const handleSidebarDropClose = useHandleSidebarDropShowing(additionalClass, false);
 *               handleClick={handleSidebarDropClose}
 * */
export const useHandleSidebarDropShowing = (sidebarClassName, isShowing = true) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const openSidebarDropClassNames = useSelector(getOpenSidebarDropClassNames);
  const slidePageGoBackPath = useSelector(getSlidePageGoBackPath);

  const handleOpen = () => {
    const sideBar = document.querySelector(`.${sidebarClassName}`);
    if (sideBar) sideBar.classList.remove('sidebar-drop--hide')
    dispatch(AppActionCreator.setOpenSidebarDropClassNames([...openSidebarDropClassNames, sidebarClassName]));
  };

  const handleClose = () => {
    if ((sidebarClassName === SidebarDropClassName.SLIDE_PAGE) && slidePageGoBackPath) {
      history.push(slidePageGoBackPath);
      document.body.removeAttribute('class');
    }
    dispatch(AppActionCreator.setOpenSidebarDropClassNames(openSidebarDropClassNames.filter((cn) => cn !== sidebarClassName)));
  };

  return () => (isShowing ? handleOpen() : handleClose())
};

