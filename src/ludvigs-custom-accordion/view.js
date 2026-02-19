/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

document
	.querySelectorAll('.wp-block-create-block-ludvigs-custom-accordion')
	.forEach((block) => {
		console.log('Initializing accordion for block:', block);
		const allowMultipleOpen = block.dataset.allowMultipleOpen === 'true';
		const accordion = block.querySelector('.accordion');
		if (!accordion) return;
		const accordionItems = accordion.querySelectorAll('.accordion-item');

		accordionItems.forEach((item) => {
			const header = item.querySelector('.accordion-header');
			if (!header) return;
			header.addEventListener('click', () => {
				const isOpen = item.classList.contains('open');
				if (!allowMultipleOpen) {
					accordionItems.forEach((i) => i.classList.remove('open'));
				}
				if (!isOpen) {
					item.classList.add('open');
				} else if (allowMultipleOpen) {
					item.classList.remove('open');
				} else if (!allowMultipleOpen) {
					item.classList.remove('open');
				}
			});
		});
	});
