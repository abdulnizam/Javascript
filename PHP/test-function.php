<?php
function run($a, $b) {
	
	$positive = '';
	$osetposition = 0;
	$astr = strval($a);
	$bstr = strval($b);
	print_r($astr);

	while(($positive = strpos($bstr, $astr, $osetposition))) {
		$positive .= $positive;
		$osetposition = $positive + strlen($astr);
	}
	print_r($positive);
	if(empty($positive)) {
		return -1;
	}
	return intval($positive);


}


// $ans = run(53, 1953786);
$ans = run(78, 195378678);
print_r($ans);

// ans: -1