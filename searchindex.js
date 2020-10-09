Search.setIndex({docnames:["api_reference/center_selector","api_reference/gsc_losses","api_reference/index","api_reference/kernels","api_reference/mmv_ops","api_reference/models","api_reference/optimization","api_reference/options","api_reference/outofcore","api_reference/preconditioner","api_reference/sparse","examples/examples","examples/hyperparameter_tuning","examples/logistic_falkon","examples/performance_tuning","examples/simple_regression","get_started","index","install"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,nbsphinx:3,sphinx:56},filenames:["api_reference/center_selector.rst","api_reference/gsc_losses.rst","api_reference/index.rst","api_reference/kernels.rst","api_reference/mmv_ops.rst","api_reference/models.rst","api_reference/optimization.rst","api_reference/options.rst","api_reference/outofcore.rst","api_reference/preconditioner.rst","api_reference/sparse.rst","examples/examples.rst","examples/hyperparameter_tuning.ipynb","examples/logistic_falkon.ipynb","examples/performance_tuning.ipynb","examples/simple_regression.ipynb","get_started.rst","index.rst","install.rst"],objects:{"":{falkon:[1,0,0,"-"]},"falkon.center_selection":{CenterSelector:[0,1,1,""],FixedSelector:[0,1,1,""],UniformSelector:[0,1,1,""]},"falkon.center_selection.CenterSelector":{select:[0,2,1,""]},"falkon.center_selection.FixedSelector":{select:[0,2,1,""]},"falkon.center_selection.UniformSelector":{select:[0,2,1,""]},"falkon.gsc_losses":{LogisticLoss:[1,1,1,""],Loss:[1,1,1,""]},"falkon.gsc_losses.LogisticLoss":{__call__:[1,2,1,""],ddf:[1,2,1,""],df:[1,2,1,""]},"falkon.gsc_losses.Loss":{__call__:[1,2,1,""],ddf:[1,2,1,""],df:[1,2,1,""],knmp_grad:[1,2,1,""],knmp_hess:[1,2,1,""]},"falkon.kernels":{GaussianKernel:[3,1,1,""],LaplacianKernel:[3,1,1,""],LinearKernel:[3,1,1,""],PolynomialKernel:[3,1,1,""],SigmoidKernel:[3,1,1,""]},"falkon.kernels.GaussianKernel":{__call__:[3,2,1,""],dmmv:[3,2,1,""],mmv:[3,2,1,""]},"falkon.kernels.LaplacianKernel":{__call__:[3,2,1,""],dmmv:[3,2,1,""],mmv:[3,2,1,""]},"falkon.kernels.LinearKernel":{__call__:[3,2,1,""],dmmv:[3,2,1,""],mmv:[3,2,1,""]},"falkon.kernels.PolynomialKernel":{__call__:[3,2,1,""],dmmv:[3,2,1,""],mmv:[3,2,1,""]},"falkon.kernels.SigmoidKernel":{__call__:[3,2,1,""],dmmv:[3,2,1,""],mmv:[3,2,1,""]},"falkon.kernels.keops_helpers":{KeopsKernelMixin:[3,1,1,""]},"falkon.kernels.keops_helpers.KeopsKernelMixin":{keops_dmmv_helper:[3,2,1,""]},"falkon.kernels.kernel":{Kernel:[3,1,1,""]},"falkon.kernels.kernel.Kernel":{__call__:[3,2,1,""],_apply:[3,2,1,""],_apply_sparse:[3,2,1,""],_decide_dmmv_impl:[3,2,1,""],_decide_mm_impl:[3,2,1,""],_decide_mmv_impl:[3,2,1,""],_finalize:[3,2,1,""],_prepare:[3,2,1,""],_prepare_sparse:[3,2,1,""],dmmv:[3,2,1,""],mmv:[3,2,1,""]},"falkon.mmv_ops.fmm_cpu":{fmm_cpu:[4,3,1,""],fmm_cpu_sparse:[4,3,1,""]},"falkon.mmv_ops.fmm_cuda":{fmm_cuda:[4,3,1,""],fmm_cuda_sparse:[4,3,1,""]},"falkon.mmv_ops.fmmv_cpu":{fdmmv_cpu:[4,3,1,""],fdmmv_cpu_sparse:[4,3,1,""],fmmv_cpu:[4,3,1,""],fmmv_cpu_sparse:[4,3,1,""]},"falkon.mmv_ops.fmmv_cuda":{fdmmv_cuda:[4,3,1,""],fdmmv_cuda_sparse:[4,3,1,""],fmmv_cuda:[4,3,1,""],fmmv_cuda_sparse:[4,3,1,""]},"falkon.mmv_ops.fmmv_incore":{incore_fdmmv:[4,3,1,""],incore_fmmv:[4,3,1,""]},"falkon.mmv_ops.keops":{run_keops_mmv:[4,3,1,""]},"falkon.models":{Falkon:[5,1,1,""],InCoreFalkon:[5,1,1,""],LogisticFalkon:[5,1,1,""]},"falkon.models.Falkon":{fit:[5,2,1,""],get_params:[5,2,1,""],predict:[5,2,1,""],set_params:[5,2,1,""]},"falkon.models.InCoreFalkon":{fit:[5,2,1,""],get_params:[5,2,1,""],predict:[5,2,1,""],set_params:[5,2,1,""]},"falkon.models.LogisticFalkon":{fit:[5,2,1,""],get_params:[5,2,1,""],predict:[5,2,1,""],set_params:[5,2,1,""]},"falkon.ooc_ops":{gpu_cholesky:[8,3,1,""],gpu_lauum:[8,3,1,""]},"falkon.optim":{ConjugateGradient:[6,1,1,""],FalkonConjugateGradient:[6,1,1,""],Optimizer:[6,1,1,""]},"falkon.options":{FalkonOptions:[7,1,1,""]},"falkon.preconditioner":{FalkonPreconditioner:[9,1,1,""],LogisticPreconditioner:[9,1,1,""],Preconditioner:[9,1,1,""]},"falkon.preconditioner.FalkonPreconditioner":{apply:[9,2,1,""],apply_t:[9,2,1,""],init:[9,2,1,""],invA:[9,2,1,""],invAt:[9,2,1,""],invT:[9,2,1,""],invTt:[9,2,1,""]},"falkon.preconditioner.LogisticPreconditioner":{apply:[9,2,1,""],apply_t:[9,2,1,""],init:[9,2,1,""],invA:[9,2,1,""],invAt:[9,2,1,""],invT:[9,2,1,""],invTt:[9,2,1,""]},"falkon.sparse":{sparse_matmul:[10,3,1,""],sparse_norm:[10,3,1,""],sparse_square_norm:[10,3,1,""]},"falkon.sparse.sparse_tensor":{SparseTensor:[10,1,1,""],SparseType:[10,1,1,""]},"falkon.sparse.sparse_tensor.SparseTensor":{narrow_rows:[10,2,1,""]},falkon:{center_selection:[0,0,0,"-"],kernels:[3,0,0,"-"],mmv_ops:[4,0,0,"-"],models:[5,0,0,"-"],ooc_ops:[8,0,0,"-"],optim:[6,0,0,"-"],options:[7,0,0,"-"],preconditioner:[9,0,0,"-"],sparse:[10,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:function"},terms:{"000000e":13,"0001":15,"01s":13,"0253":3,"0909":3,"0x7f95bb20c150":13,"0x7fdefbdb2fd0":15,"0x7feede906190":15,"100":[1,3,12,13,16],"1000":[5,12,13],"10000":7,"100000":13,"100_000":13,"10350":[5,17],"10k":7,"122":13,"143":12,"144":13,"150":3,"160":12,"1605":13,"1606":13,"1608":13,"1613":13,"1617":13,"1min":13,"2006":[5,17],"2017":[5,17],"2019":[5,17],"2020":[5,17],"20s":13,"22s":12,"2490":3,"2603":13,"26s":13,"28s":13,"2min":12,"2nd":9,"30000":7,"300000000":7,"300_000_000":7,"30k":7,"323":12,"3399":3,"33s":13,"34s":13,"3632":13,"3647":13,"366":15,"3696":13,"3min":13,"4028":13,"404":15,"41s":13,"42s":13,"48s":13,"4922":3,"500":[5,12],"506":15,"50s":13,"5158":3,"5643":13,"66s":13,"6910":13,"786":15,"900000000":7,"900_000_000":7,"abstract":[0,1,3,9],"boolean":9,"byte":7,"case":[3,7,8,12,13,18],"class":[0,1,3,4,5,6,7,9,10,11,12,13,16],"default":[3,5,7,13],"final":[3,5,13,15],"float":[3,5,7,9],"function":[1,3,4,5,8,9,10,13,15],"import":[7,12,13,15,16,18],"int":[0,4,5,7,9,10,15],"long":10,"new":[0,3,8,10,15],"return":[0,1,3,4,5,8,9,10,12,13,15],"short":[3,5,13],"switch":[5,13],"throw":0,"true":[1,5,7,8,9,12,13,15,16],"try":[7,18],"while":[0,3,4,9,12,13,15,18],But:4,For:[3,5,7,9,12,13,16,17],One:1,Such:[1,7],The:[0,1,3,4,5,7,8,9,10,12,13,15,16,17,18],Then:[5,9],These:1,Used:7,Useful:[3,8],Using:[5,18],Will:[1,10],Xts:5,Yts:5,__call__:[1,3],_appli:3,_apply_spars:3,_decide_dmmv_impl:3,_decide_mm_impl:3,_decide_mmv_impl:3,_final:3,_finalize_spars:3,_prepar:3,_prepare_spars:3,abl:9,about:[8,11,13,17],abov:5,acceler:[7,9,17],accept:[5,13],accumul:[3,4,7],accuraci:[5,12,13,17],achiev:[5,13,18],across:5,action:3,actual:[3,4,9],add:[9,15],added:[7,13],addit:[3,5,9,12,13,15],addition:[1,4],adequ:13,advanc:[5,17],after:[10,15,18],agnost:4,air:15,alessandro:[5,17],algorithm:[1,4,5,7,8,9,13,15,17],alias:4,all:[0,3,4,5,7,10,11,16,17],alloc:[4,8],allow:[3,4,7,9],almost:12,along:[3,7],alongsid:[12,15,18],alpha:[3,9,13,15],alreadi:15,also:[0,1,3,12,13,17],altern:15,although:4,alwai:[0,7,8,12,13],amount:[5,9,13,15,16],ani:[3,5,9,10,13],anoth:[3,9,15],apart:3,api:[3,12,15,17],appli:[5,9,10,12],applic:[5,13],apply_t:9,appropri:[0,3,9],approx:9,approxim:[5,9,15,17],arang:[12,15],argmax:12,argument:[0,1,3,5,15],around:[5,12,13],arrai:[4,10,12,13,15],arxiv:[5,17],assert:[5,18],assert_allclos:3,associ:1,assum:[3,4,10],attribut:[5,15],atx:9,auto:[7,13,15],avail:[3,4,7,9,14,15,18],avoid:[4,5,12,13,15,16],awai:3,axi:4,axs:12,bach:[5,17],back:[9,12,13],base:[0,3,5,9,13],baseopt:[3,4],basic:[3,4,11,15,16],becom:[9,15],been:15,befor:[3,7,9,15],begin:8,below:5,best:[12,15],best_estimator_:12,best_params_:12,beta:[3,9],better:[5,7,12,13,17],between:[1,3,4,5,7,9,13,15],bigger:7,billion:[5,17],binari:[5,13,17],binary_loss:13,bind:18,bit:[13,15],block:[3,4,8],blockwis:4,blue:12,bool:[4,5,7,8],boston:15,both:[0,3,5,9,12,15,16,17,18],bound:7,boundari:13,buffer:8,build:1,built:17,calcul:[1,3,4,5,7,8,17],call:[0,3,5,9],callabl:[3,5],can:[3,4,5,7,9,10,12,13,15,16,17,18],capabl:17,carefulli:3,carratino:[5,17],caus:7,center:[0,1,5,7,9],center_select:[2,5,13,15,17],centerselector:[2,5,17],certain:[0,5,18],cg_epsilon_32:[7,13,15],cg_epsilon_64:[7,13,15],cg_full_gradient_everi:[7,13,15],cg_toler:[7,13,15],chang:[3,7,13,15],characterist:[0,7],check:[7,8,15,17,18],chol:9,chol_force_in_cor:[7,13,15],chol_force_ooc:[7,13,15],chol_par_blk_multipli:[7,13,15],choleski:[2,7,8,17],choleskyopt:8,choos:[0,3,5],chosen:3,circl:13,cite:17,classif:[5,11,12,13,17],clean:8,clear:13,clearli:13,clone:18,close:[7,12,15],cmap:12,coars:12,code:[8,9,16,17],color:13,column:[4,5,10,12],com:[17,18],come:1,common:[3,10],compar:[5,11,13],compil:[15,18],compon:5,comput:[1,3,4,5,7,9,10,15,17],compute_arch_spe:[7,13,15],concentr:13,concord:[1,5,13,17],concret:[1,9],condit:[5,9,17],conjug:[2,5,7,9,13,15,16,17],conjugategradi:2,conjugategradientopt:6,conjunct:1,consist:13,constant:3,constrain:5,constraint:5,constructor:0,consumpt:4,contain:[0,1,5,8,9,10,15],contigu:[0,5,8,10],control:0,converg:[5,7,15,17],convers:10,convert:[3,12,13,15],coolwarm_r:12,copi:[5,10],core:[5,7,8],correct:13,correctli:[7,18],correspond:[0,3,9,10],could:[1,8,12,15],cours:12,covari:3,cover:11,cpu:[3,4,5,7,9,10,12,13,15,17,18],cpu_precondition:[7,9,13,15],creat:[0,3,5,9,12],crimin:15,cross:12,crucial:8,csc:10,csr:10,cubla:[12,13],cuda:[3,5,7,8,10,15,17],current:[3,9,10,17],cutoff:7,cv_results_:12,cython:18,d_loss:1,darker:12,data:[0,1,3,4,5,7,9,10,17],datafram:12,dataset:[0,3,4,5,7,12,13,15,16,17],datatyp:9,datum:3,dd_loss:1,ddf:1,debug:[7,9,13,15,16],decid:3,decomposit:[7,8,9],decreas:[5,13],deep:5,deeper:7,def:[12,13,15],defin:[8,9,10],definit:[8,9],degrad:7,degre:3,demonstr:[13,15],dens:[3,10],depend:[1,5,7,18],deriv:[1,3,9],descent:[9,13,15],describ:[3,5,7],descript:1,design:5,desir:[4,5,13,18],detail:[11,16,17],detect:[3,7,15],determin:[3,4,5,7,12,13],deviat:[3,12,15],devic:[0,7,10],dfrac:[1,3],diagon:[7,9],dict:5,dictionari:[4,9],differ:[0,3,4,5,7,9,12,13,16],differenti:1,dig:7,digit:12,dim:12,dimens:[1,3,4,7,9,13,15],dimension:[1,3,4],directli:4,displai:5,distinguish:13,distribut:[3,12,15,18],divid:7,dmmv:[3,4],dmmv_fn:3,document:[3,5,7,17],doe:[8,10],domin:7,done:[3,15],dot:[2,17],doubl:[3,4,7],down:5,downstream:3,draw:13,dropbox:[12,13],dtype:[3,12,13],due:[7,15],dure:5,each:[3,5,7,12,13],earli:13,easi:[12,13,15,16],easili:18,effect:[3,9],effici:[3,5,10,17],either:[9,10],elaps:13,element:[3,10],elementwis:3,embed:3,empir:13,empti:[0,4],encod:5,encount:[12,13],end:8,enough:7,ensur:12,entir:12,entri:0,epsilon:7,equat:[1,9],equival:[3,9,10],error:[3,5,7,12,13,15],error_everi:[5,13,15],error_fn:[5,13,15],estim:[1,5,7,9,11,12,13,16,17],etc:[5,15],evalu:[5,7,17],even:[3,7,12],everi:[5,7,13,15],everyth:18,evolut:5,exact:7,exampl:[1,3,5,7,9,10,17],except:0,execut:7,exist:[16,18],exp:[1,3],expand:3,expens:9,experi:[7,11],explan:3,explor:12,expos:9,express:4,extend:[3,13],extens:[7,18],extra:[5,9],extract:0,extrem:17,eye:[12,13],factor:[3,8],fail:[12,13],falkon:[2,11,16,18],falkonconjugategradi:2,falkonml:[17,18],falkonopt:[1,2,3,4,5,6,8,9,12,13,15,16,17],falkonprecondition:2,fall:[9,12,13],fallback:15,fals:[4,7,8,9,12,13,15],far:3,fashion:4,fast:[5,12,15,17],faster:7,fdmmv_cpu:[2,17],fdmmv_cpu_spars:[2,17],fdmmv_cuda:[2,17],fdmmv_cuda_spars:[2,17],feasibl:12,featur:[13,15,17],ferei:[5,17],few:[13,16],fewer:5,fig:[12,13,15],figsiz:[12,13],fill:8,find:[8,12,17],fine:15,finish:3,first:[1,3,5,9,10,12,15],fit:[5,7,12,13,15,16],fix:0,fixedselector:[2,17],flk:[12,13,15],flk_1:5,flk_2:5,flk_err:13,flk_kernel:13,flk_pred:13,flkk_1:5,flkk_2:5,float32:[7,9,12,13],float64:[3,7,9],fmm_cpu:[2,17],fmm_cpu_spars:[2,17],fmm_cuda:[2,17],fmm_cuda_spars:[2,17],fmmv_cpu:[2,17],fmmv_cpu_spars:[2,17],fmmv_cuda:[2,17],fmmv_cuda_spars:[2,17],fmmv_incor:4,fnc:[3,4],fold:12,follow:[1,3,4,5,8,12,13,17,18],forc:[3,7,9],forcibl:0,form:[3,5,9],format:10,formula:[1,3,4,13],fortran:[5,8],forward:[3,8],found:[12,13,15],four:12,frac:[3,9],franci:[5,17],from:[0,1,3,5,9,10,12,13,15,16,18],from_dict:12,from_numpi:[12,13,15,16],full:[0,3,4,7,9,17],fulli:[5,11],func_val:1,further:13,gain:15,gaussian:[2,12,13],gaussiankernel:[1,3,5,12,13,15,16],gener:[0,1,3,5,9,13,17],get:[5,9,12,17],get_cmap:12,get_error_str:[12,13],get_param:5,ggplot:[12,13,15],giacomo:[5,12,13,17],git:18,github:[17,18],give:[9,10],given:[1,3,9,12,15],global:[5,7,12,17],goal:15,goe:11,going:13,good:[5,12,13],govern:[3,13],gpu:[3,4,5,7,9,11,15,17,18],gpu_choleski:[2,17],gpu_lauum:[2,17],grad_mul:1,gradient:[2,5,7,9,13,15,16,17],grai:12,great:12,greater:[5,9],greater_is_bett:12,grid_search:12,gridsearchcv:12,gsc:1,gsc_loss:[2,5,9,13,17],guidanc:5,hand:9,handl:[5,17],hard:13,hardwar:7,has:[5,12,15],have:[0,1,3,4,5,7,9,13,15,16,17,18],held:12,help:[7,9],helper:12,here:[3,9,12,13,15],high:[3,7,12],higher:[5,8,13],hist:15,hold:[3,10],home:[12,13],hot:[5,12],hous:15,how:[3,5,7,8,9,11,12,13],howev:[5,8,13,15],http:18,hyperbol:3,hyperparamet:11,idea:12,ideal:12,ident:5,ignor:0,ill:[5,17],implement:[1,3,4,5,8,9,13],improv:3,includ:[15,17],incore_fdmmv:[2,17],incore_fmmv:[2,17],incorefalkon:[2,17],increas:[7,13,16],incur:5,index:[10,12,17],indexptr:10,indic:[10,12],individu:5,induc:[9,12,13,15],inf:[7,13,15],infinit:3,influenc:3,inform:[3,5,7,9,16,17],inherit:3,init:9,initi:[0,3,5,9,12,13],inlin:[12,13,15],inner:[3,5,13],inplac:3,input:[0,1,3,4,5,8,10],insight:15,instal:[7,15,16,17],instanc:[0,1,3,5,13],instead:[4,5,10,13],instruct:18,integr:[3,12,17],intel:17,intens:17,interfac:[8,15],intern:13,interpret:[1,10],introduc:[7,15],inva:9,invat:9,invers:[3,9],involv:[3,7],invt:9,invtt:9,is_avail:18,is_cuda:5,issu:7,item:12,iter:[5,7,13,15,16],iter_list:[5,13],its:[3,7,9,13],itself:[3,9],jitter:9,k_mm:9,k_nm:7,keep:[5,17],keepdim:15,keop:[3,4,7,15,16,17],keops_acc_dtyp:[7,13,15],keops_act:[3,7],keops_dmmv_help:3,keops_help:3,keops_sum_schem:[7,13,15],keopskernelmixin:3,kernel:[1,2,4,5,6,7,9,11,12,13,15,16,17,18],kernel_matrix:3,kernel_typ:3,knmp_grad:1,knmp_hess:1,knob:8,know:11,krr:[5,9],label:[0,1,12,13,15],lambda:[9,12],laplacian:2,laplaciankernel:3,laptop:13,larg:[3,4,5,11,17],larger:[3,5,7,12,15],latter:5,lauum:[7,8],lauum_par_blk_multipli:[7,13,15],lead:[5,12,13],leakag:15,learn:[5,12,13,15,17],least:[3,4],legend:15,length:[3,5,10,12],less:[3,7],level:8,librari:[8,11,12,13,15,16,17,18],like:[3,4,16,18],limit:10,line:16,linear:[2,9,15],linearkernel:3,link:18,linux:18,list:[4,5],load:18,load_boston:[15,16],load_digit:12,loc:15,log:[1,13],log_loss:1,logfalkon:1,logflk:13,logflk_err:13,logflk_kernel:13,logflk_pr:13,logist:[2,5,9,11,17],logisticfalkon:[0,1,2,9,12,13,16,17],logisticloss:[1,5,9,13],logisticprecondition:2,logloss:13,longer:[12,13,15],look:[3,16,17],lorenzo:[5,17],loss:[2,5,9,12,13,17],lot:[9,13],low:12,lower:[5,7,8,9,13,17],luigi:[5,17],lvert:3,mac:18,machin:7,made:3,mai:[0,1,3,5,7,12,13,15],main:[3,15,17],make:[3,5,9,13,17,18],make_circl:13,make_scor:12,manag:[7,10],mandatori:[13,15],mani:[5,15],map:[5,9],marker:13,marteau:[5,17],mat:[3,4],mathcal:1,mathemat:10,mathrm:[3,9],matplotlib:[12,13,15],matric:[1,3,4,7,9,10],matrix:[1,3,4,5,7,8,9,10,18],matshow:12,max:12,max_cpu_mem:[7,13,15],max_gpu_mem:[7,13,15],maxim:11,maximum:[7,16],maxit:[5,12,13,15,16],mclass_loss:12,mclass_scor:12,mean:[3,7,12,13,15],mean_test_scor:12,meaningless:12,meanti:[5,17],measur:7,memori:[0,3,4,7,8,17],merg:18,meth:3,method:[0,1,2,3,5,9,13,15,17],metric:[12,15],middl:13,min:12,min_cuda_iter_size_32:7,min_cuda_iter_size_64:7,min_cuda_pc_size_32:7,min_cuda_pc_size_64:7,mind:5,minim:13,minimum:[7,15],minor:12,mispredict:13,mkl:17,mm_fn:3,mmv:[1,3,4],mmv_fn:3,mmv_op:[2,3,17],model:[0,1,2,7,9,16,17],model_select:[12,13,15],modifi:3,modul:[4,15,17],moment:13,monitor:[13,15],more:[1,4,5,7,8,9,13,15,17,18],most:[3,15],much:[3,7,15,18],multi:[1,11,12,17],multiclass:5,multipl:[1,3,4,5,7,9,10,11],multipli:3,multiplicatoin:3,must:[1,3,4,5,7,9,10,12,15],n_sampl:13,name:[1,3,5],narrow_row:10,natur:[7,12,15],ncol:[12,13],nearbi:3,necessari:[3,5,13,15],necessarili:13,need:[3,9,13,18],nest:5,neural:[5,17],neurip:5,never:[4,5],never_store_kernel:7,newli:8,newton:[5,13,17],no_keop:[13,15,16],no_single_kernel:[4,7,13,15],nois:13,non:[0,10],none:[0,1,3,4,5,6,8,9,10,13,15],nor:7,norm:[3,10],normal:[7,9,11,12,15],note:[3,4,5,7,8,9,10,13],notebook:[11,13,14,15,16,17,18],notion:11,num_dimens:5,num_output:5,num_sampl:5,num_test:15,num_test_sampl:5,num_train:15,number:[0,1,5,7,9,10,12,13,15,16],numpi:[0,12,13,15,18],nvidia:18,nxt:3,nystroem:[5,7,9,15],nystrom:5,object:[0,3,5,9,10,13,15],observ:0,obtain:[1,3,9,12,13,15],occur:[13,15],off:17,offer:15,often:[3,7,13,15],onc:[4,16],one:[1,3,4,5,8,9,12,17],ones:[7,8],onli:[0,1,3,4,5,7,9,12,13,15,16,18],ooc_op:[2,17],oper:[2,3,4,8,9,17,18],opposit:3,opt:[1,3,4,6,8,9],optim:[2,3,5,7,9,11,15,17],option:[0,1,2,3,4,5,6,8,9,10,11,12,13,15,17],order:[0,5,9],ordin:12,origin:[3,10],other:[0,1,3,7,8,9,13,17],other_var:4,otherwis:[0,3,7,8],our:[8,9,12,15,17,18],out:[3,4,7,8,10,11,12,17],outer:[3,13],output:[0,1,3,4,8,10,13,16],over:[1,12],overfit:12,overrid:[3,7,9],overridden:9,overwrit:8,overwritten:9,page:17,paid:13,panda:12,paper:17,parallel:[7,8],param:[5,12],paramat:12,paramet:[0,1,3,4,5,7,8,9,10,11,13,15],parameter_grid:12,part:[3,8,9,13,15,17],partial:3,particular:[3,5],pass:[0,1,3,4,9,12,13,15,17],patch:18,path:[3,5,13],pc_epsilon:9,pc_epsilon_32:[7,13,15],pc_epsilon_64:[7,13,15],pc_util:9,pcolormesh:12,penalti:[5,9,12,13,15,16],penalty_list:[5,13],per:[3,7],perfect:13,perform:[3,4,5,7,9,11,13],pertain:9,pick:[0,5],pin_memori:10,pip:18,pipelin:5,piv:12,pivot_t:12,place:[3,5],plan:13,platform:17,pleas:17,plot:15,plot_heatmap:12,plot_predict:13,plt:[12,13,15],point:[3,5,7,9,12,13,15,17],pointer:10,pollut:15,polynomi:2,polynomialkernel:3,portabl:18,pose:15,posit:[5,8,9,12,15],possibl:[3,5,10,13],potrf:[7,8],power:3,pre:3,preced:1,precis:7,precondit:15,precondition:[2,5,6,7,13,15,17],pred:[5,12,13,15],predict:[1,5,12,15,16],predictor:0,preprocess:[3,15],prerequisit:17,present:[5,9,18],preserv:[0,3],prevent:7,price:[13,15],principl:4,print:[5,7,9,12,13,15],probabl:5,problem:[5,7,9,11,12,13,15,17,18],process:[3,5,13,17],produc:1,product:[1,2,4,7,9,17],project:5,properli:15,properti:15,provid:[0,1,3,4,5,8,12],pyplot:[12,13,15],python:[7,8,17],pytorch:[15,17],quantiti:4,quickli:15,quit:[7,12,13],radial:[2,17],rais:7,ram:[4,7],randn:[3,5],random:[0,3,5,15],random_gen:0,random_st:[12,13],randomli:[0,3],rang:[7,12],rate:15,rbf:3,read:[3,17],readi:18,real:11,reason:[5,9],receiv:7,recomput:[7,13],recurs:18,red:12,reduc:[4,12],reduct:4,refer:[4,5,7,15],regard:7,regress:[5,11,17,18],regular:[5,9,12,13,15],rel:3,relat:[3,15],relev:9,remain:[5,12,13,15],remov:3,repeat:5,repositori:18,repres:[1,4,5,10],represent:[0,10,12],requir:[0,9,16,18],res_df:12,rescal:1,research:17,reset:[7,9],reshap:[12,13,15,16],resourc:5,respect:[1,9,12,13],result:[5,8,11],return_x_i:[12,15,16],reus:3,reweight:9,ridg:[5,11,17,18],right:9,rmse:15,roof:[5,17],root:18,rosasco:[5,17],roughli:7,routin:3,row:10,rudi:[5,17],rule:5,run:[5,7,12,13,15],run_keops_mmv:[2,17],rvert:3,same:[0,1,3,4,5,8,9,10,12,13],sampl:[1,3,5,12,13],scalabl:17,scalar:3,scale:[3,5,11,12,17],scatter:13,scheme:[7,13],scikit:[12,15,17],scipi:10,score:[12,15],seamless:12,search:17,second:[1,3,4,9,12],see:[3,5,10,12,13,16],seed:[5,13,15],select:[0,5,10],selector:0,self:[1,5,13,17],sens:13,sensit:3,separ:[3,4,10],seri:13,set:[0,3,5,7,8,9,15,16],set_param:5,set_titl:[12,13],set_xlabel:12,set_xtick:12,set_xticklabel:12,set_ylabel:12,set_ytick:12,set_yticklabel:12,setup:16,sever:18,shall:[0,3],shape:[1,3,5,10,12,15],share:[8,9,10,18],should:[1,3,5,7,8,9,10,13,18],show:[11,12,13],showcas:15,shuffl:[12,13,15],shuffle_idx:15,side:[3,7,9],sigma:[3,12,13,15,16],sigmoid:2,sigmoidkernel:3,sign:13,similar:[3,5,15],simpl:[5,11,15],simpli:[3,9],sinc:[3,7,9,10,12,13,15,18],singl:[3,5,7,13],size:[3,7,8,9,10],sklearn:[12,13,15,16],slightli:[5,13],slowdown:13,slower:[3,7,13],small:[3,7,12,13,15],smaller:[4,5,12],softmax:1,solut:[9,15],solv:[5,9],solver:[5,17],some:[3,9,10,15,18],soon:14,sourc:[8,17],space:3,spars:[0,2,3,4,9,17,18],sparse_matmul:10,sparse_norm:10,sparse_square_norm:10,sparse_tensor:[0,3,4,9,10],sparse_typ:10,sparsetensor:[0,2,3,4,9,17],sparsetyp:10,special:3,specif:[1,3,13],specifi:[0,3,4,5,7,13],spectrum:3,speed:[8,13,17,18],spirit:15,split:[4,15],sqrt:15,squar:[3,5,10,12,13],stabl:5,standard:[3,12,15],start:[9,10,11,17],startup:7,statist:15,std:[12,15],step:[5,9,13,15],stop:[13,15],storag:10,store:[3,4,7,9],str:[1,3,4,5,7,10],strategi:0,strict:7,strictli:13,string:[3,5,7],structur:3,style:[12,13,15],sub:13,subclass:1,subdivid:7,submodul:18,subobject:5,subplot:[12,13,15],subsampl:3,subsequ:3,subset:10,substitut:3,success:12,suffici:7,sum:[4,10,13],suppli:3,support:[4,9,10,12,13,15,17],sure:[3,17,18],sym_mat:3,symmetr:3,synthet:13,sys:[12,13],system:[5,9,11,17],tackl:5,take:[1,3,7,10,13,15,18],taken:3,tangent:3,tanh:3,target:[0,5,9],tensor:[0,1,3,4,5,8,9,10,12,13,15,17],test:[3,5,15,17],test_idx:15,test_pr:[12,15],test_siz:[12,13],than:[0,1,4,5,7,9,12,13],thei:[0,3,5,7,8,13],them:[12,15],therefor:[3,5,12,18],thi:[0,1,3,4,5,7,8,9,10,12,13,14,15,17,18],thin:4,three:[1,4,5,7,10,13],threshold:7,through:[5,11,16,17],thu:[15,18],thumb:5,tile:[3,7],time:[0,1,7,9,12,13,18],todo:15,toi:15,too:[7,9,12],toolkit:18,top:[3,4,9,17],torch:[0,1,3,4,5,8,9,10,12,13,15,16,18],total:[4,5,12,13],trade:17,train:[1,5,7,11],train_idx:15,train_mean:[12,15],train_pr:[12,15],train_std:[12,15],train_test_split:[12,13],transform:15,translat:3,transpos:[4,9],tree:18,triangl:[8,9],triangular:[8,9],tricki:18,trivial:13,trsm:9,tune:[11,15],tupl:[0,1,10],tutori:11,twice:7,two:[1,3,5,8,9,12,13,15,17],type:[3,4,7,10,12,13],typic:[1,3,5,9],ulyss:[5,17],understand:9,uniform:5,uniformli:0,uniformsel:[13,15],uniformselector:[2,17],unig:[12,13],uninstal:18,union:[0,3,5,9,10],unit:15,unitari:4,unknown:9,unlik:[3,17],until:18,updat:5,upper:[8,9],usabl:9,usag:[3,4,17],use:[3,5,7,9,11,12,13,15,16],use_cpu:[5,7,9,12,13,15],used:[0,1,3,4,5,7,9,13,17],useful:[7,9,12,13,15,17],user:[3,12,13,18],userwarn:[12,13],uses:[1,5,9,13,18],using:[1,3,5,12,15,16,18],usual:[3,5,9,12,18],util:[12,13,15],valid:[5,7,12,13,15],valu:[4,5,9,10,12,13,15],vanilla:13,vari:12,varieti:13,variou:[9,15],vec:4,vec_sigma:3,vector:[1,3,4,5,7,9,12],vectori:3,veri:[3,13,15],verifi:13,version:[3,8,13,18],via:[9,11,12,18],vmax:12,vmin:12,wai:18,wall:[12,13],want:[7,9,12],warn:[0,7,12,13],weight:[1,9],well:[0,5],were:12,what:3,when:[1,3,5,7,12,15],whenev:[9,10],where:[1,3,4,5,9,13,15],whether:[7,8,10],which:[0,1,3,4,5,7,8,9,10,12,13,15,17,18],whole:[0,4,9],wholli:4,wide:[3,13],width:3,window:18,wise:[3,10],within:[4,5],without:7,work:[3,5,7,8,9,11,13,18],workload:7,world:11,worth:7,would:7,wrapper:[1,4,10],write_opposit:8,wrt:1,x_1:3,x_2:3,x_c:1,x_center:0,x_m:0,x_test:[12,13],x_train:[12,13],xlabel:12,xtest:15,xtrain:15,y_1:[1,13],y_2:[1,13],y_center:0,y_m:0,y_test:[12,13],y_train:[12,13],ylabel:12,you:[3,7,15,17,18],your:[7,17],ytest:15,ytrain:15,zero:[3,7,8,10,13,15]},titles:["falkon.center_selection","falkon.gsc_losses","API Reference","falkon.kernels","falkon.mmv_ops","falkon.models","falkon.optim","falkon.options","falkon.ooc_ops","falkon.preconditioner","falkon.sparse","Examples","Hyperparameter Tuning with Falkon","Introducing Logistic Falkon","Training on the GPU","Falkon Regression Tutorial","Getting Started","Falkon","Install"],titleterms:{api:2,both:13,center_select:0,centerselector:0,choleski:9,conjug:6,conjugategradi:6,content:17,creat:15,cuda:18,data:[12,13,15],defin:13,dot:3,evalu:[12,15],exampl:[11,16],falkon:[0,1,3,4,5,6,7,8,9,10,12,13,15,17],falkonconjugategradi:6,falkonopt:7,falkonprecondition:9,fdmmv_cpu:4,fdmmv_cpu_spars:4,fdmmv_cuda:4,fdmmv_cuda_spars:4,fixedselector:0,fmm_cpu:4,fmm_cpu_spars:4,fmm_cuda:4,fmm_cuda_spars:4,fmmv_cpu:4,fmmv_cpu_spars:4,fmmv_cuda:4,fmmv_cuda_spars:4,gaussian:3,get:16,gpu:14,gpu_choleski:8,gpu_lauum:8,gradient:6,grid:12,gsc_loss:1,hyperparamet:12,incore_fdmmv:4,incore_fmmv:4,incorefalkon:5,indic:17,instal:18,intel:18,introduc:13,introduct:[12,13,15],keop:18,kernel:3,laplacian:3,linear:3,load:[12,13,15],logist:[1,13],logisticfalkon:5,logisticprecondition:9,loss:1,method:6,mkl:18,mmv_op:4,model:[5,12,13,15],more:16,ooc_op:8,oper:10,optim:[6,12],option:[7,16],paramet:12,pass:16,perform:15,platform:18,plot:[12,13],polynomi:3,pre:15,precondition:9,predict:13,preprocess:[12,13],prerequisit:18,process:15,product:3,pytorch:18,radial:3,refer:[2,17],regress:15,result:12,run_keops_mmv:4,search:12,set:[12,13],sigmoid:3,spars:10,sparsetensor:10,split:[12,13],start:16,support:18,tabl:17,test:[12,13,18],train:[12,13,14,15],tune:12,tutori:15,uniformselector:0}})