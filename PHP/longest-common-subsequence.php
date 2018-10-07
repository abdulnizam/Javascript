<?php

	
function run($n, $m, $a, $b) {

	$get_seq = longestCommonSubsequence($a, $b);

	$longest_common_subseq = '';

	foreach( $get_seq as $val )
	{
		$longest_common_subseq .= $val.',';
	}

	return rtrim($longest_common_subseq,',');
}

function longestCommonSubsequence(array $left, array $right)
{
	$m = count($left);
	$n = count($right);
	$a = array();

	for ($i = $m - 1; $i >= 0; $i--)
	{
		for ($j = $n - 1; $j >= 0; $j--)
		{
			if ($left[$i] == $right[$j])
			{
				$a[$i][$j] = (isset($a[$i + 1][$j + 1]) ? $a[$i + 1][$j + 1] : 0) + 1;
			}
			else
			{
				$a[$i][$j] = max(
					(isset($a[$i + 1][$j]) ? $a[$i + 1][$j] : 0)
					, (isset($a[$i][$j + 1]) ? $a[$i][$j + 1] : 0)
				);
			}
		}
	}

	$i = 0;
	$j = 0;
	$lcs = array();
	while($i < $m && $j < $n)
	{
		if ($left[$i] == $right[$j])
		{
			$lcs[] = $left[$i];
			$i++;
			$j++;
		}
		elseif (
			(isset($a[$i + 1][$j]) ? $a[$i + 1][$j] : 0)
			>= (isset($a[$i][$j + 1]) ? $a[$i][$j + 1] : 0)
		) {
			$i++;
		}
		else
		{
			$j++;
		}
	}
	return $lcs;
}

?>