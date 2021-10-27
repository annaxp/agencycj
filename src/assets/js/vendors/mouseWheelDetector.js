const WheelIndicatorNew = function (window, document) {
  function initialise(scrolling) {
    var scrollings = []
    var isScrollAllowed = {}
    isScrollAllowed.m = { up: true, down: true }
    isScrollAllowed.k = deepExtend({}, isScrollAllowed.m)

    //cheks for passive event support
    var g_supportsPassive = false
    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function () {
          g_supportsPassive = true
        },
      })
      window.addEventListener('testPassive', null, opts)
      window.removeEventListener('testPassive', null, opts)
    } catch (e) {}

    /**
     * Adds or remove the possibility of scrolling through sections by using the mouse wheel or the trackpad.
     */
    function setMouseWheelScrolling(value) {
      if (value) {
        addMouseWheelHandler()
      } else {
        removeMouseWheelHandler()
      }
    }

    /**
     * Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
     * Optionally a second parameter can be used to specify the direction for which the action will be applied.
     *
     * @param directions string containing the direction or directions separated by comma.
     */
    function setAllowScrolling(value, directions) {
      if (typeof directions !== 'undefined') {
        directions = directions.replace(/ /g, '').split(',')

        directions.forEach(function (direction) {
          setIsScrollAllowed(value, direction, 'm')
        })
      } else {
        setIsScrollAllowed(value, 'all', 'm')
      }
    }

    init()

    function init() {
      setAllowScrolling(true)
      setMouseWheelScrolling(true)
    }

    /**
     * Detecting mousewheel scrolling
     *
     * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
     * http://www.sitepoint.com/html5-javascript-mouse-wheel/
     */
    var prevTime = new Date().getTime()

    function MouseWheelHandler(e) {
      var curTime = new Date().getTime()

      // cross-browser wheel delta
      e = e || window.event
      var value = e.wheelDelta || -e.deltaY || -e.detail
      var delta = Math.max(-1, Math.min(1, value))

      var horizontalDetection =
        typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined'
      var isScrollingVertically =
        Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) ||
        Math.abs(e.deltaX) < Math.abs(e.deltaY) ||
        !horizontalDetection

      //Limiting the array to 150 (lets not waste memory!)
      if (scrollings.length > 149) {
        scrollings.shift()
      }

      //keeping record of the previous scrollings
      scrollings.push(Math.abs(value))

      //time difference between the last scroll and the current one
      var timeDiff = curTime - prevTime
      prevTime = curTime

      //haven't they scrolled in a while?
      //(enough to be consider a different scrolling action to scroll another section)
      if (timeDiff > 200) {
        //emptying the array, we dont care about old scrollings for our averages
        scrollings = []
      }

      var averageEnd = getAverage(scrollings, 10)
      var averageMiddle = getAverage(scrollings, 70)
      var isAccelerating = averageEnd >= averageMiddle

      if (isAccelerating && isScrollingVertically) {
        if (delta < 0) {
          scrolling('down')
        } else {
          scrolling('up')
        }
      }

      return false
    }

    function removeMouseWheelHandler() {
      if (document.addEventListener) {
        document.removeEventListener('mousewheel', MouseWheelHandler, false) //IE9, Chrome, Safari, Oper
        document.removeEventListener('wheel', MouseWheelHandler, false) //Firefox
        document.removeEventListener(
          'MozMousePixelScroll',
          MouseWheelHandler,
          false,
        ) //old Firefox
      } else {
        document.detachEvent('onmousewheel', MouseWheelHandler) //IE 6/7/8
      }
    }

    function addMouseWheelHandler() {
      var prefix = ''
      var _addEventListener

      if (window.addEventListener) {
        _addEventListener = 'addEventListener'
      } else {
        _addEventListener = 'attachEvent'
        prefix = 'on'
      }

      // detect available wheel event
      var support =
        'onwheel' in document.createElement('div')
          ? 'wheel' // Modern browsers support "wheel"
          : document.onmousewheel !== undefined
          ? 'mousewheel' // Webkit and IE support at least "mousewheel"
          : 'DOMMouseScroll' // let's assume that remaining browsers are older Firefox
      var passiveEvent = g_supportsPassive ? { passive: false } : false

      if (support == 'DOMMouseScroll') {
        document[_addEventListener](
          prefix + 'MozMousePixelScroll',
          MouseWheelHandler,
          passiveEvent,
        )
      }

      //handle MozMousePixelScroll in older Firefox
      else {
        document[_addEventListener](
          prefix + support,
          MouseWheelHandler,
          passiveEvent,
        )
      }
    }

    function setIsScrollAllowed(value, direction, type) {
      if (direction !== 'all') {
        isScrollAllowed[type][direction] = value
      } else {
        Object.keys(isScrollAllowed[type]).forEach(function (key) {
          isScrollAllowed[type][key] = value
        })
      }
    }

    return setMouseWheelScrolling
  }

  return initialise
}

/**
 * Gets the average of the last `number` elements of the given array.
 */
function getAverage(elements, number) {
  var sum = 0

  //taking `number` elements from the end to make the average, if there are not enought, 1
  var lastElements = elements.slice(Math.max(elements.length - number, 1))

  for (var i = 0; i < lastElements.length; i++) {
    sum = sum + lastElements[i]
  }

  return Math.ceil(sum / number)
}

/**
 * Extends a given Object properties and its childs.
 */
function deepExtend(out) {
  out = out || {}
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var obj = arguments[i]

    if (!obj) {
      continue
    }

    for (var key in obj) {
      if (!obj.hasOwnProperty(key)) {
        continue
      }

      // based on https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
      if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
        out[key] = deepExtend(out[key], obj[key])
        continue
      }

      out[key] = obj[key]
    }
  }
  return out
}

export default WheelIndicatorNew
