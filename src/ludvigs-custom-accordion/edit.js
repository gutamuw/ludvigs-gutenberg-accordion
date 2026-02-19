/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	InspectorControls,
	useBlockProps,
	MediaUpload,
	RichText,
} from '@wordpress/block-editor';
import { Button, PanelBody } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
	const { accordions, allowMultipleOpen } = attributes;

	const addAccordion = () => {
		setAttributes({
			accordions: [
				...accordions,
				{
					title: '',
					content: '',
					image: '',
					isOpen: false,
				},
			],
		});
	};

	const updateItem = (index, key, value) => {
		const newItems = [...accordions];
		newItems[index][key] = value;
		setAttributes({ accordions: newItems });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Accordion Settings">
					<label>
						<input
							type="checkbox"
							checked={allowMultipleOpen}
							onChange={(e) =>
								setAttributes({
									allowMultipleOpen: e.target.checked,
								})
							}
						/>
						Allow multiple accordions open at once
					</label>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<Button onClick={addAccordion} title="Add accordion">
					Add Accordion
				</Button>

				{accordions.map((accordion, index) => (
					<div key={index}>
						<label htmlFor={`accordion-title-${index}`}>
							Accordion Title
						</label>
						<RichText
							id={`accordion-title-${index}`}
							tagName="h3"
							value={accordion.title}
							onChange={(value) =>
								updateItem(index, 'title', value)
							}
							placeholder={'Add Accordion Title...'}
						/>
						<label htmlFor={`accordion-content-${index}`}>
							Accordion Content
						</label>
						<RichText
							key={`accordion-content-${index}`}
							id={`accordion-content-${index}`}
							tagName="div"
							value={accordion.content}
							onChange={(value) =>
								updateItem(index, 'content', value)
							}
							placeholder={'Add Accordion Content...'}
						/>

						<label htmlFor={`accordion-image-${index}`}>
							Accordion Image
						</label>
						{accordion.image && (
							<img
								src={accordion.image}
								alt={'Accordion Image'}
							/>
						)}
						<MediaUpload
							onSelect={(media) =>
								updateItem(index, 'image', media.url)
							}
							render={({ open }) => (
								<Button
									onClick={open}
									variant="secondary"
									size="small"
								>
									{accordion.image
										? 'Change Image'
										: 'Upload Image'}
								</Button>
							)}
						/>

						<Button
							title="Remove"
							isDestructive
							variant="secondary"
							size="small"
							onClick={() => {
								const newAccordions = accordions.filter(
									(_, i) => i !== index
								);
								setAttributes({ accordions: newAccordions });
							}}
						>
							Remove
						</Button>
					</div>
				))}
			</div>
		</>
	);
}
