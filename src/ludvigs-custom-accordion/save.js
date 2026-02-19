/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const { accordions, allowMultipleOpen } = attributes;

	return (
		<div
			{...useBlockProps.save()}
			data-allow-multiple-open={allowMultipleOpen}
		>
			<div className="accordion">
				{accordions.map((item, index) => (
					<div
						className={`accordion-item ${
							item.isOpen ? 'open' : ''
						}`}
						key={index}
					>
						<div className="accordion-header">
							<h3>{item.title}</h3>
							<span
								className="accordion-toggle-indicator"
								aria-hidden="true"
							></span>
						</div>
						<div className="accordion-content">
							<RichText.Content
								tagName="div"
								value={item.content}
							/>
							{item.image && (
								<img src={item.image} alt={item.title} />
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
