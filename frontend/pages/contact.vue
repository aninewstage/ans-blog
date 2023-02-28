<template>
  <div class="site-content">
    <Title>Contact</Title>
    <div
      class="
        mnmd-block mnmd-block--fullwidth mnmd-block--contiguous
        page-heading page-heading--has-background
      "
    >
      <div class="container">
        <h1 class="page-heading__title">Contact</h1>
        <div class="page-heading__subtitle">Get in touch with us.</div>
      </div>
    </div>
    <div class="mnmd-block mnmd-block--fullwidth mnmd-block--contiguous">
      <a href="#" class="ratio-3by1 link-block">
        <div
          class="background-img"
          style="background-image: url(img/maps.jpg)"
        ></div>
      </a>
    </div>
    <div class="mnmd-block mnmd-block--fullwidth">
      <div class="container">
        <div class="row">
          <div class="mnmd-main-col">
            <div class="single-content">
              <div class="typography-copy">
                <h3>Send us an Email ( <span style="color:red;">Features in Progress</span> )</h3>
                <form>
                  <div class="row">
                    <div class="col-sm-4 form-group">
                      <label for="contactform-name">Name <small>*</small></label
                      ><input
                        type="text"
                        id="contactform-name"
                        name="contactform-name"
                        value=""
                        class="form-control required"
                        aria-required="true"
                      />
                    </div>
                    <div class="col-sm-4 form-group">
                      <label for="contactform-email"
                        >Email <small>*</small></label
                      ><input
                        type="email"
                        id="contactform-email"
                        name="contactform-email"
                        value=""
                        class="required email form-control"
                        aria-required="true"
                      />
                    </div>
                    <div class="col-sm-4 form-group">
                      <label for="contactform-phone">Phone</label
                      ><input
                        type="text"
                        id="contactform-phone"
                        name="contactform-phone"
                        value=""
                        class="form-control"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-8 form-group">
                      <label for="contactform-subject"
                        >Subject <small>*</small></label
                      ><input
                        type="text"
                        id="contactform-subject"
                        name="contactform-subject"
                        value=""
                        class="required form-control"
                        aria-required="true"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="contactform-message"
                      >Message <small>*</small></label
                    ><textarea
                      class="required form-control"
                      id="contactform-message"
                      name="contactform-message"
                      rows="6"
                      cols="30"
                      aria-required="true"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <button
                      class="btn btn-primary"
                      type="submit"
                      id="contactform-submit"
                      name="contactform-submit"
                      value="submit"
                      disabled
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <!-- .single-content -->
          </div>
          <!-- .mnmd-main-col -->
          <div class="mnmd-sub-col">
            <div class="typography-copy">
              <h3>Contact Us</h3>
              <dl>
                <dt>
                  <i class="mdicon mdicon-mail_outline"></i
                  ><span> Postal Address</span>
                </dt>
                <dd>
                  Somewhere in <br />Myanmar
                </dd>
                <dt>
                  <i class="mdicon mdicon-mail_outline"></i>
                  <span>Business Phone</span>
                </dt>
                <dd>+95 9268201071</dd>
              </dl>
            </div>
          </div>
          <!-- .mnmd-sub-col -->
        </div>
        <!-- .row -->
      </div>
      <!-- .container -->
    </div>
    <!-- .mnmd-block -->
  </div>
  <!-- .site-content -->
</template>