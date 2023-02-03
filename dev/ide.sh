set -a 
. ./env
. ./vars
set +a

CONTAINER=$PREFIX-ide
EXT_PORT=13000-13100
IN_PORT=3000-3100

U=1000
G=1000

IS_EXIST=$(docker ps | grep "$CONTAINER")
if [[ ! -z $IS_EXIST ]]; then
	echo "is exist $IS_EXIST"
	docker exec -it $CONTAINER bash -c "cd /home/dark123us/app; su dark123us"
	exit
fi

# CREATELINK="mkdir -p $DST"
# LINKS="config doc scripts static template svc_cap test requirements.txt setup.py readme.txt"
# for val in $LINKS
# do
# 	CREATELINK=$CREATELINK"; ln -s $COPY/$val $DST/$val "
# done
# CREATELINK=$CREATELINK"; chown -R dark123us:dark123us $DST; cd $DST; pip install -U pip; pip install -r requirements.txt"
echo $HOME
echo $SRC
echo $TMP

docker run -it --rm \
	-v $SRC:$DST \
	-v $TMP:$DST_TMP \
	-v /tmp/.X11-unix:/tmp/.X11-unix \
	-e DISPLAY=$DISPLAY \
	--name $CONTAINER \
	-p $EXT_PORT:$IN_PORT \
	$IMAGE bash -c "su dark123us; mc"
#	$IMAGE bash -c "$CREATELINK; su dark123us; "
	#su dark123us"
	#-p 10030:10030 \
	#-c "cd $DST; npm i; chown -R $U:$G $DST; su dark123us; bash"
	#-v $SRC/package.json:$DST/package.json \
	#-v $SRC/public:$DST/public \
