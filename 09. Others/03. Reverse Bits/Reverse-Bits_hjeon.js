/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
	let reversed = 0;

	for (let i = 0; i < 32; i++) {
		reversed <<= 1;
		reversed += (n & 1);
		n >>= 1;
	}
	return (reversed >>> 0);
};
