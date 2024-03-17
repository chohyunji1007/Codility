
# CountBoundedSlices

![Difficulty: Medium](https://img.shields.io/badge/Difficulty-Medium-yellow)

An integer K and a non-empty array A consisting of N integers are given.
A pair of integers (P, Q), such that 0 ≤ P ≤ Q &lt; N, is called a <i>slice</i> of array A.
A <i>bounded slice</i> is a slice in which the difference between the maximum and minimum values in the slice is less than or equal to K. More precisely it is a slice, such that max(A[P], A[P + 1], ..., A[Q]) − min(A[P], A[P + 1], ..., A[Q]) ≤ K.
The goal is to calculate the number of bounded slices.
For example, consider K = 2 and array A such that:
    A[0] = 3
    A[1] = 5
    A[2] = 7
    A[3] = 6
    A[4] = 3
There are exactly nine bounded slices: (0, 0), (0, 1), (1, 1), (1, 2), (1, 3), (2, 2), (2, 3), (3, 3), (4, 4).
Write a function:
<p style="font-family: monospace; font-size: 9pt; display: block; white-space: pre-wrap"><tt>function solution(K, A);</tt></p>
that, given an integer K and a non-empty array A of N integers, returns the number of bounded slices of array A.
If the number of bounded slices is greater than 1,000,000,000, the function should return 1,000,000,000.
For example, given:
    A[0] = 3
    A[1] = 5
    A[2] = 7
    A[3] = 6
    A[4] = 3
the function should return 9, as explained above.
Write an <b><b>efficient</b></b> algorithm for the following assumptions:
<ul style="margin: 10px;padding: 0px;"><li>N is an integer within the range [<span class="number">1</span>..<span class="number">100,000</span>];</li>
<li>K is an integer within the range [<span class="number">0</span>..<span class="number">1,000,000,000</span>];</li>
<li>each element of array A is an integer within the range [<span class="number">−1,000,000,000</span>..<span class="number">1,000,000,000</span>].</li>
</ul>


