.. falkon documentation master file, created by
   sphinx-quickstart on Thu Jun 18 10:38:58 2020.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

==================================
Falkon
==================================
A Python library for large-scale kernel methods, with optional (multi-)GPU acceleration.

The library currently includes two solvers:
one for approximate kernel ridge regression [THFLK]_ which is extremely fast, and one for kernel logistic
regression [LOGFLK]_ which trades off lower speed for better accuracy on binary classification problems.

Falkon is built on top of `PyTorch <https://pytorch.org/>`__ which is used to support both CPU and GPU tensor
calculations. Optionally we also use a patched version of `KeOps <https://www.kernel-operations.io/keops/index.html>`__
for fast kernel evaluations on the GPU.

Falkon seamlessly supports scaling to multiple GPUs and all compute-intensive parts of the algorithms are multi-GPU
capable. The user can choose which GPUs will be used by setting the `CUDA_VISIBLE_DEVICES` environment variable.


.. toctree::
   :maxdepth: 3

   install
   examples/examples
   api_reference/index


Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`
