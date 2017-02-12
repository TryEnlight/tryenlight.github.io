'use strict';

/**
 * Create a new pre-configured iframe.
 *
 * Options:
 *
 * visible: (boolean) Don't hide the iframe by default.
 * sandbox: (array) Sandbox properties.
 * document: (document) HTML Document we use to create the iframe element.
 *
 * @param {Element} el DOM element where the iframe should be added on.
 * @param {String} id A unique name/id for the iframe.
 * @param {String} options Options.
 * @return {Object}
 * @api private
 */
module.exports = function iframe(el, id, options) {
  options = options || {};

  var doc = options.doc || options.document || document
    , i;

  options.sandbox = options.sandbox || [
    'allow-pointer-lock',
    'allow-same-origin',
    'allow-scripts',
    'allow-popups',
    'allow-forms'
  ];

  try {
    //
    // Internet Explorer 6/7 require a unique name attribute in order to work.
    // In addition to that, dynamic name attributes cannot be added using
    // `i.name` as it will just ignore it. Creating it using this oddly <iframe>
    // element fixes these issues.
    //
    i = doc.createElement('<iframe name="'+ id +'">');
  } catch (e) {
    i = doc.createElement('iframe');
    i.name = id;
  }

  //
  // The iframe needs to be added in to the DOM before we can modify it, make
  // sure it's remains unseen.
  //
  if (!options.visible) {
    i.style.top = i.style.left = -10000;
    i.style.position = 'absolute';
    i.style.display = 'none';
  }

  i.setAttribute('frameBorder', 0);

  if (options.sandbox.length) {
    i.setAttribute('sandbox', (options.sandbox).join(' '));
  }

  i.id = id;

  return {
    /**
     * Return the document which we can use to inject or modify the HTML.
     *
     * @returns {Document}
     * @api public
     */
    document: function doc() {
      return this.window().document;
    },

    /**
     * Return the global or the window from the iframe.
     *
     * @returns {Window}
     * @api public
     */
    window: function win() {
      return i.contentWindow || (i.contentDocument
        ? i.contentDocument.parentWindow || {}
        : {}
      );
    },

    /**
     * Add the iframe to the DOM, use insertBefore first child to avoid
     * `Operation Aborted` error in IE6.
     *
     * @api public
     */
    add: function add() {
      if (!this.attached()) {
        el.insertBefore(i, el.firstChild);
      }

      return this;
    },

    /**
     * Remove the iframe from the DOM.
     *
     * @api public
     */
    remove: function remove() {
      if (this.attached()) {
        el.removeChild(i);
      }

      return this;
    },

    /**
     * Checks if the iframe is currently attached to the DOM.
     *
     * @returns {Boolean} The container is attached to the mount point.
     * @api private
     */
    attached: function attached() {
      return !!doc.getElementById(id);
    },

    /**
     * Reference to the iframe element.
     *
     * @type {HTMLIFRAMEElement}
     * @public
     */
    frame: i
  };
};
