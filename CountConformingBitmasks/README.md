
# CountConformingBitmasks

![Difficulty: Medium](https://img.shields.io/badge/Difficulty-Medium-yellow)

In this problem we consider unsigned 30-bit integers, i.e.&nbsp;all integers B such that 0 ≤ B &lt; 2<sup>30</sup>.
We say that integer A <i>conforms</i> to integer B if, in all positions where B has bits set to 1, A has corresponding bits set to 1.
For example:
<ul style="margin: 10px;padding: 0px;"><li><tt style="white-space:pre-wrap">00 0000 1111 0111 1101 1110 0000 1111(BIN) = 16,244,239</tt> conforms to <br>
 <tt style="white-space:pre-wrap">00 0000 1100 0110 1101 1110 0000 0001(BIN) = 13,032,961</tt>, but</li>
<li><tt style="white-space:pre-wrap">11 0000 1101 0111 0000 1010 0000 0101(BIN) = 819,399,173</tt> does not conform to <br>
 <tt style="white-space:pre-wrap">00 0000 1001 0110 0011 0011 0000 1111(BIN) = 9,843,471</tt>.</li>
</ul>

Write a function:
<p style="font-family: monospace; font-size: 9pt; display: block; white-space: pre-wrap"><tt>function solution(A, B, C);</tt></p>
that, given three unsigned 30-bit integers A, B and C, returns the number of unsigned 30-bit integers conforming to at least one of the given integers.
For example, for integers:
<ul style="margin: 10px;padding: 0px;"><li>A = <tt style="white-space:pre-wrap">11 1111 1111 1111 1111 1111 1001 1111(BIN) = 1,073,741,727</tt>,</li>
<li>B = <tt style="white-space:pre-wrap">11 1111 1111 1111 1111 1111 0011 1111(BIN) = 1,073,741,631</tt>, and</li>
<li>C = <tt style="white-space:pre-wrap">11 1111 1111 1111 1111 1111 0110 1111(BIN) = 1,073,741,679</tt>,</li>
</ul>

the function should return 8, since there are 8 unsigned 30-bit integers conforming to A, B or C, namely:
<ul style="margin: 10px;padding: 0px;"><li><tt style="white-space:pre-wrap">11 1111 1111 1111 1111 1111 0011 1111(BIN) = 1,073,741,631</tt>,</li>
<li><tt style="white-space:pre-wrap">11 1111 1111 1111 1111 1111 0110 1111(BIN) = 1,073,741,679</tt>,</li>
<li><tt style="white-space:pre-wrap">11 1111 1111 1111 1111 1111 0111 1111(BIN) = 1,073,741,695</tt>,</li>
<li><tt style="white-space:pre-wrap">11 1111 1111 1111 1111 1111 1001 1111(BIN) = 1,073,741,727</tt>,</li>
<li><tt style="white-space:pre-wrap">11 1111 1111 1111 1111 1111 1011 1111(BIN) = 1,073,741,759</tt>,</li>
<li><tt style="white-space:pre-wrap">11 1111 1111 1111 1111 1111 1101 1111(BIN) = 1,073,741,791</tt>,</li>
<li><tt style="white-space:pre-wrap">11 1111 1111 1111 1111 1111 1110 1111(BIN) = 1,073,741,807</tt>,</li>
<li><tt style="white-space:pre-wrap">11 1111 1111 1111 1111 1111 1111 1111(BIN) = 1,073,741,823</tt>.</li>
</ul>

Write an <b><b>efficient</b></b> algorithm for the following assumptions:
<ul style="margin: 10px;padding: 0px;"><li>A, B and C are integers within the range [<span class="number">0</span>..<span class="number">1,073,741,823</span>].</li>
</ul>


