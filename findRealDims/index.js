function findRealDims(frame = 'screen', isVertical = true) {
	const { height, width } = Dimensions.get(frame);
	let realWidth;
	let realHeight;
	if ((height > width && !isVertical) || (width > height && isVertical)) {
		realWidth = height;
		realHeight = width;
	} else {
		realWidth = width;
		realHeight = height;
	}
	return { realWidth, realHeight };
}